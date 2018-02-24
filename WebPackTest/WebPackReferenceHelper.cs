using System;
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
            link = string.Format(template,
                Convert.ToBoolean(WebConfigurationManager.AppSettings["UseWebpackDevServer"])
                    ? "http://localhost:666"
                    : "http://localhost:5000"
                , src
                );
            return new MvcHtmlString(link);
        }
    }
}