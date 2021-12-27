# Dating 2048

This is forked from [PhD 2048](https://github.com/ymfa/phd-2048) which is a fork from [2048](https://github.com/gabrielecirulli/2048) 

This is made to be a fun game to show your elders or coupled friends how hard online dating is. If you are doing the online dating grind, make sure you priortize self-care and be kind to yourself! <3  

[Play it here!](https://heyyjudes.github.io/online-dating-2048/)

### Forking
Feel free to fork and make lower the difficulty of online dating 2048. A few suggestions on what to fiddle with:

- Change the frequency of ghosting to reflect your own life in `game_manager.js`;
- Merge 2 ghosted blocks to create a self-discovery tile in `game_manager.js`
- Change tile names in `html_actuator.js`;
- Change game description in `index.html`;
- Change screenshots and icons in `meta/`;


As with [the original 2048](https://github.com/gabrielecirulli/2048/blob/master/CONTRIBUTING.md), the `master` branch contains the complete game except for sharing features, analytics, etc., which are not transferrable to a fork.
Therefore you should use the `master` branch rather than `gh-pages`, and add your own sharing and tracking code as appropriate.

### Known issues
- I have to make changes directly to `main.css` instead of `main.scss`, because compiling the original `main.scss` does not reproduce the original `main.css`.
- Break Up Logic from PhD 2048 is removed

### License
Online Dating 2048 is licensed under the [GNU General Public License](https://github.com/heyyjudes/online-dating-2048/blob/main/LICENSE.txt).
