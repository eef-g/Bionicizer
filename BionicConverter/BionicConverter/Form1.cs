using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using Microsoft.Web.WebView2.Core;


namespace BionicConverter
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            TextHandler th = new TextHandler();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            string curDir = Directory.GetCurrentDirectory();
            webView.Source = new Uri(String.Format("file:///{0}/WebPage/text_input.html", curDir));
        }
    }
}
