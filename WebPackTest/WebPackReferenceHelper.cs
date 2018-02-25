using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;

namespace WebPackTest
{
    public static class WebPackReferenceHelper
    {
        public static IHtmlString WebPackJsReference(this HtmlHelper html, string entryPoint)
        {
            var jsReference = new WebPackReferenceCreator(entryPoint).CreateJsReference();
            return string.IsNullOrEmpty(jsReference) ? null : new MvcHtmlString(jsReference);
        }

        public static IHtmlString WebPackCssReference(this HtmlHelper html, string entryPoint)
        {
            var cssReference = new WebPackReferenceCreator(entryPoint).CreateCssReference();
            return string.IsNullOrEmpty(cssReference) ? null : new MvcHtmlString(cssReference);
        }

        internal abstract class ChunkBase
        {
            private readonly string _fullName;
            private readonly string _version;
            private readonly string _srcTemplate = @"{0}/dist/{1}";

            protected ChunkBase(string fullName, string version)
            {
                _fullName = fullName;
                _version = version;
            }

            protected abstract string GetTemplate();

            public string GetReference(string path)
            {
                return CreateReferenceCore(path, GetFileName());
            }

            private string CreateReferenceCore(string path, string src)
            {
                return string.Format(GetTemplate(), string.Format(_srcTemplate, path, src));
            }

            private string GetFileName()
            {
                var parts=new List<string>();
                var fileName = Path.GetFileNameWithoutExtension(_fullName);
                var extension = Path.GetExtension(_fullName);
                parts.Add(fileName);
                if (!string.IsNullOrEmpty(_version))
                {
                    parts.Add($"v{_version}");
                }
                parts.Add(extension.Substring(1));
                return string.Join(".", parts);
            }
        }

        private class StyleSheetChunk : ChunkBase
        {
            public StyleSheetChunk(string fullName, string version) : base(fullName, version)
            {
            }

            protected override string GetTemplate()
            {
                return @"<link rel=""stylesheet"" type=""text/css"" href=""{0}"">";
            }
        }

        private class ScriptChunk : ChunkBase
        {
            public ScriptChunk(string fullName, string version) : base(fullName, version)
            {
            }

            protected override string GetTemplate()
            {
                return @"<script type=""text/javascript"" src=""{0}""></script>";
            }
        }

        public class WebPackReferenceCreator
        {
            private readonly string _entryName;
            private readonly string _devServerUrl = "http://localhost:666";
            private readonly string _prodcutonServerUrl = "http://localhost:5000";

            public WebPackReferenceCreator(string entryName)
            {
                _entryName = entryName;
            }

            private string ServerUrl => IsProduction ? _prodcutonServerUrl : _devServerUrl;
            private bool IsProduction => !Convert.ToBoolean(WebConfigurationManager.AppSettings["UseWebpackDevServer"]);
            private Version Version => Version.Parse(WebConfigurationManager.AppSettings["ScriptsVersion"]);

            private IEnumerable<ChunkBase> GetChunks()
            {
                var chunks = new List<ChunkBase>();
                if (IsProduction)
                    chunks.AddRange(new ChunkBase[]
                    {
                        new ScriptChunk("runtime.js", Version.ToString()),
                        new ScriptChunk("vendor.js", Version.ToString()),
                        new StyleSheetChunk("vendor.css", Version.ToString()),
                        new ScriptChunk($"{_entryName}.js", Version.ToString()),
                        new StyleSheetChunk($"{_entryName}.css", Version.ToString())
                    });
                else
                    chunks.Add(new ScriptChunk($"{_entryName}.js", null));

                return chunks;
            }

            private string CreateReferencesCore(IEnumerable<ChunkBase> chunks)
            {
                return string.Join(Environment.NewLine, chunks.Select(chunk => chunk.GetReference(ServerUrl)));
            }


            public string CreateJsReference()
            {
                return CreateReferencesCore(GetChunks().OfType<ScriptChunk>());
            }

            public string CreateCssReference()
            {
                return CreateReferencesCore(GetChunks().OfType<StyleSheetChunk>());
            }
        }
    }
}