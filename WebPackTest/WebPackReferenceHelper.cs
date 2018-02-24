using System;
using System.IO;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;

namespace WebPackTest
{
    public static class WebPackReferenceHelper
    {
        public static IHtmlString WebPackReference(this HtmlHelper html, string src)
        {
            var template=@"<script type=""text/javascript"" src=""{0}/dist/{1}""></script>";
            var link = string.Empty;
            var useDevServer = Convert.ToBoolean(WebConfigurationManager.AppSettings["UseWebpackDevServer"]);
            link = string.Format(template,
                useDevServer
                    ? "http://localhost:666"
                    : "http://localhost:5000"
                , GetScriptPath(useDevServer,src)
                );
            return new MvcHtmlString(link);
        }

        private static string GetScriptPath(bool useDevServer, string src)
        {
            if (useDevServer) return src;
            var version = Version.Parse(WebConfigurationManager.AppSettings["ScriptsVersion"]);
            var fileName = Path.GetFileNameWithoutExtension(src);
            var extension = Path.GetExtension(src);
            return $"{fileName}.v{version}{extension}";
        }
    }
}