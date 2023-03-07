using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;


namespace BionicConverter
{
    internal class TextHandler
    {
        private string textToEdit = "";
        Regex handlerRegex;

        public TextHandler()
        {
            textToEdit = "The Quick Brown Fox Jumped Over The Lump, Long, Log";
            string strRegex = @"<b>(?<X>.*?)</b>";
            RegexOptions myRegexOptions = RegexOptions.IgnoreCase | RegexOptions.Multiline;
            handlerRegex = new Regex(strRegex, myRegexOptions);
        }

        public string MakeBionic(string s="-1")
        {
            if (s == "-1") s = textToEdit;
            string bionicText = "";
            List<string> words = s.Split(' ').ToList();
            string curr_word = "";
            foreach(string word in words)
            {
                curr_word = "<b>" + $"{word.Substring(0, word.Length / 2)}" + "</b>" + $"{word.Substring(word.Length / 2)}";
                bionicText += curr_word + " ";
            }
            foreach(Match boldMatch in handlerRegex.Matches(bionicText))
            {
                bionicText = bionicText.Replace(boldMatch.ToString(), boldMatch.ToString());
            }


            return bionicText;
        }
    }
}
