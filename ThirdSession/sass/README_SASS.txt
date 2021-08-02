What is CSS and what is SASS?

CSS «Cascading Style Sheets» is a style sheet language, used to organize the presentation
and appearance of a web page, whether on a computer, a mobile phone, a Tablet, etc.

SASS "Syntactically Awesome Stylesheets" (defined as superpowered CSS) is a style sheet
metalanguage. This is a scripting language that is translated into CSS.

It consists of two syntaxes, the original being the indented “.sass” syntax that uses
indentation to separate blocks of code and the new line character to separate rules. The
ewer syntax, ".scss", which uses block formatting like CSS, uses braces to denote blocks of
code and semicolons to separate lines within a block. SASS interpreter translates code to CSS

Differences between SCSS and SASS

SASS is the pre-processor and the full syntax, while SCSS is the CSS syntax but with all
the advantages of SASS.
EXAMPLE::
    SASS
        .head
            font-size:12px;
            color:blue;
            .head-top
                font-family:arial;

    SCSS::
        .head {
            font-size:12px;
            color:blue;
            .head-top{
                font-family:arial;
            }
        }

    CSS::
        .head{
            font-size:12px;
            color:blue;
        }
        .head .head-top{
            font-family:arial;
        }

SCSS SASS

Now that the difference between SASS and SCSS is clear, let's see all the features that make
SASS much more powerful than CSS.

Using variables and nesting
Once you declare a variable you can use it throughout the project as long as you import the
file in which it is declared, and if you want to modify it, it will be modified in all the places
where it is used at the same time, leaving aside the typical "find and replace".

SASS allows 4 types of data:

Numbers (including units).
Strings.
Colors.
Booleans.
In addition, variables allow doing mathematical operations with them, let's see an example:
    $heightHeader: 120px;
    .header{
        height: $heightHeader;
        .header-top{
            height:$heightHeader;
        }
    }

SASS also allows us to nest selectors so that we avoid having to constantly repeat scope prefixes
in CSS selectors.

    SCSS:
        .header{
            height: $heightHeader;
            .header-top{
                height: $heightHeader/2;
            }
            .header-bottom{
                width: $heightHeader/6;
            }
        }

In this way we simplify the code of our document.

THE "&" SELECTOR:
With this selector we save ourselves from writing a selector several times, basically it is a
selector that is used to call the same selector that we are using.

    SCSS:
        a{
            color:blue;
            &:hover{
                color:black;
            }
        }
    CSS:
        a{
            color:blue;
        }
        a:hover{
            color:black;
        }

It can also be placed behind:

    SCSS:
        a{
            color:red;
            .link &{
                color:green;
            }
        }
    CSS:
        a{
            color:red;
        }
        .link a {
            color: green;
        }

In this way we get that all the links that are placed inside an element with the link class
are green.

To extend
We can extend styles to other declarations, for cases where two selectors have the same styles
with some exceptions.

    SCSS:
        .button{
            padding: 2px 5px;
            font-size: 16px;
            background-color:red;
        }
        .blue-button{
            @extend .button;
            background-color: blue;
        }
        
    CSS:
        .button, blue-button{
            padding: 2px 5px;
            font-size:16px;
            background-color:red;
        }
        blue-button{
            background-color:blue;
        }

Mixins
Thanks to mixins we can write our own functions with the parameters we define.
They are declared with @mixin + the name of the function + the name of the variable and
included in the scss code with @include + the name of the function + the value of the variable.

    SCSS:
        $MyPreferedSize: 60px;
        @mixin square($mySize){
            width:$mySize;
            height:$mySize;
        }
        @mixin circle($mySize){
        @include square($mySize)
            border-radius:100%;
        }
        .circle{
            @include circle($MyPreferedSize);
        }
    CSS:
        .circle{
            width:60px;
            height:60px;
            border-radius:50%;
        }

In conclusion, using SCSS increases the productivity of the work generated in the style sheets,
since when making the layout in SCSS a large number of characters is saved and files of 70,000
characters become 30,000 (approximately), this translated on time represents a significant saving,
and part with SCSS the code is more organized and clear, and it is easier for someone else to read.