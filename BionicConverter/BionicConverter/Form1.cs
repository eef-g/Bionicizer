﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;

namespace BionicConverter
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            string curDir = Directory.GetCurrentDirectory();
            browser.Url = new Uri(String.Format("file:///{0}/view.html", curDir));
            TextHandler th = new TextHandler();

        }
    }
}
