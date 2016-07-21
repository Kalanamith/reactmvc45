using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ReactMVC45.Startup))]
namespace ReactMVC45
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
