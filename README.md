# uCoz Táska Source Code

(English | [Hungarian](https://github.com/ucoztaska/ucoztaska/blob/master/README.hu.md))

This is the source code of the template used on the [uCoz Táska website](http://ucoztaska.ucoz.hu). The template is free for all personal or commercial uses.

## Important Notices

This code was written in 2016, and has been barely reviewed or modified since. Certain parts of the code might not work the intended way. If you've found a bug and would like to fix it, feel free to open a pull request. We highly appreciate the contribution!

This template contains, in various places, code from other people or organizations. Most of them are available in our other repositories. We claim no right over any of the mentioned source codes.

## Installation

### Clone the repository

You can use `git` to clone the repository from Github using the following command:

```sh
git clone git@github.com:ucoztaska/ucoztaska
```

Alternatively, you can use the "Download ZIP" option on github.com or download the latest [release](https://github.com/ucoztaska/ucoztaska/releases).

### Base Installation

1. Upload the contents of the **files** folder to your website using the File Manager or FTP.

2. Copy the contents of the `my.css` file and replace the contents of the **Style sheet (CSS)** template with the copied code.

3. Replace the necessary templates with the ones available in the **templates** directory.

4. Create the informers based on the information in the **informers** folder. The settings are in JSON format.

*Note: the informer IDs are 10 and 11, as used on uCoz Táska. You might not get the exact same IDs when you create your informers. In this case, you must replace all occurrences of `$MYINF_10$` and `$MYINF_11$` with your own variants in the source code.*

### Resources (Publisher module) Setup

uCoz Táska's main attraction was the Resources section, which contained scripts, templates, graphics, and tutorials about uCoz. This is the core module of the website.

To configure it, you must enable the usage of the **Author's name**, **Author's website**, and **Source** fields and rename the first two to **Demo** and **Download link** accordingly.

### Premium Scripts (Site Catalog module) Setup

"Premium Scripts" was a discontinued section of the uCoz Táska website. It was used for listing paid scripts from uScript.pro. Due to no active users in this section, we have dropped the idea. However, we are still willing to provide the source code used for this section.

To configure this section, you must enable the **Additional field 1** and **Additional field 2** fields and rename them to **Price** and **Old Price** accordingly. In addition to this, you must also rename the **Site URL** field to **uScript.pro link**.

### Questions (File Catalog module) Setup

This was one of the best features of the website as it allowed the possibility of asking questions, answering them, and marking them as answered. **This section requires PHP usage**, which is available starting from the **Optimal** paid plan.

Unfortunately, we have lost access to the PHP script that powered the "mark question as answered" feature, and we are currently not looking forward to writing a new one.

If you have written your own PHP script for this module, you have to enable the **Author's name** field and rename it to **Solution**. If this field is empty/not provided, it means that the question has not been answered. If the field's value is "1" (without quotation marks), the question has been marked as answered.

## Issues/Questions

If you have any question or you've experienced an issue with the template, feel free to open an issue in [this repository's issue tracker](https://github.com/ucoztaska/ucoztaska/issues).

## License

Copyright 2016-2019 József Sallai & IntoMedia Group. Licensed under MIT. See [LICENSE](https://github.com/ucoztaska/ucoztaska/blob/master/LICENSE) for more information.
