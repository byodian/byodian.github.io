---
title: vim tips
mySlug: vim tips
tags:
  - vim
created: 2022-07-19T16:58:00.123Z
updated: 2024-05-03T02:45:16.342Z
description: vim tips
---

## Replace
```bash
:%s/https\?.*/[&](&)/g
```

- `%` – set the range to the entire file
- `s` – substitution
- `/https\?.*/` – regex to match `http` or `https` and anything else after it
- `[&](&)`– The `&` is the magic here and inserts the matched text. In this case, the URL. The rest of the characters are interpreted literally, giving us the linked URL in the resulting markdown.
- `/g` changes all the matches on a line
- use any regex delimiter in your pattern substitution. No  need to use `/` at all, try `#` instead: `:s#/usr/local/bin#/usr/sbin#g` to avoid escaping slashes.
- Limit a search and replace operation between lines matching 2 regex patterns using `/pattern1/,/pattern2/s/search/replace/`

[Search and replace | Vim Tips Wiki | Fandom](https://www.notion.so/Search-and-replace-Vim-Tips-Wiki-Fandom-51a0f65baf324e00bbcc06f0691fd7ca)

### Repeat the last substitution
Developing efficient workflows in Vim is all about repetition, first and foremost by using `.` to repeat the last command. But Vim can also repeat your last substitution. Here’s a few options with subtle differences:

- `:&` – Repeats last substitution but resets the flags. Also works with just :s.
- `:&&` – Repeat last substitution with the same flags.
- `:%&` – Repeat last substitution on entire file, reset flags.
- `:%&&` – Repeat last substitution on entire file, keep flags.

```bash
:%s/something/newthing/g
:%&g
```

## Search
- Append `/e` to the end of a search to place the cursor at the end of the next match. I.e `/patten/e`
- Stay in search mode `/pattern<C-g>` or `/pattern<C-t>`
- Append `\C` to the end of a search to enable a case-sensitive search. Examples: 
  - `/copyright` - case insensitive
  - `/Copyright` - case sensitive
  - `/copyright\C` - case sensitive
  - `/Copyright\c` - case insensitive

## [Power of g](https://vim.fandom.com/wiki/Power_of_g)

The global command `:g` is very useful - multiple repeats

```json
:[range]g[lobal]/{pattern}/[cmd]
```

For example:

- `:g/pattern/d` – Remove lines matching pattern
- `:3,4g/pattern/d` – Remove lines matching pattern between 3 and 4 line
- `:g/pattern/y A` - Yank all lines matching ‘pattern’ into the register.
- `:g!/pattern/d` – Remove lines that do NOT match the pattern
- `:v/pattern/d` – Also removes lines that do not match the pattern
- `:cdo g/function/norm! ciw func<cr>`

- `gQ`
- `g0`
- `g$`
- `g <ctrl-g>`
- `g <ctrl-a>`
- `g#`
- `g&`
- `g-`
- `g+`
- `g??`
- `gI`
- `gU`
- `gt`
- `gT`
- `g_`
- `gf`
- `gd`
- `gg`

## Copying and pasting lines
- The slow way is to navigate to the line I want, yank it, go back and paste it.
- The most efficient way I can think to do that is to jump by searching with `/` and pressing `<CR>`. Then **yank** the line with `yy`. Then use the jump list, `<ctrl-o>`, to bounce back. And press `p` to paste the line below or `P` to paste the line above.
- Use the ex `:yank` command `:<line number>yank` – copies the line number specified to your default register.
- Use the ex `:copy` command `:<line number>copy.` – copies the line number specified and pastes it to the line below
- The ex `:copy` command has a short version `t`
    - `:281t.` – Copy line 281 and paste it below **the current line**
    - `:-10t.` – Copy the line 10 lines above the current line and paste it below **the current line**
    - `:+8t.` – Copy the line 8 lines after **the current line** and paste it below
    - `:10,20t.` – Copy lines 10 to 20 and paste them **below**
    - `:t20` – Copy the current line and paste it **below line 20**
- Pasting into Vim from @StackOverflow? Avoid indent fail by using set `:paste` or use the system clipboard with `"*p` 
 
    [https://vimtricks.com/p/vimtricks-avoid-paste-formatting](https://vimtricks.com/p/vimtricks-avoid-paste-formatting)

## The shortcut keyboards in insert mode 
- `<c-w>` - delete a word
- `<c-x><C-f>` - autocomplete filenames in vim.
- `<c-n>` - 自动提示
- `<c-p>` - 自动提示
- `<c-r>=` - From insert mode, enters Vim’s expression register
- `<c-f>` - switch from Command-Line mode to the command-line window. Or During the `/` portion of a search,  open a search history window.
- `<c-a>` or `<C-x>` - increment or decrement hex, binary, and octal numbers in normal mode.
- `<c-k>` + 2 letters - add special characters in insert mode. see mode `:help dig`. Examples:
    - `<c-k>oo` • bullet
    - `<c-k>Db` ◆ diamond bullet
    - `<c-k>Pd` £ pound
    - `<c-k>Eu` € euro
    - `<c-k>-N` – en dash
    - `<c-k>-M` — em

## Quickfix
what a quick fix list is effectively what a quick fix list is a series of entries in which point to a specific file and location.

A lot of times they’re associated with errors links or search results.

- quickfix
  - `:cw` 错误信息分屏显示
  - `:cp` 跳到上一个错误
  - `:cl` 列出所有错误
  - `:cc` 显示错误详细信息
  - `:cdo`
- location-list
  `:ldo`

## DOS 与 Linux 的换行符
字符转换命令

- `dos2unix [-kn] file [newfile]`
- `unix2dos [-kn] file [newfile]`

## The undo tree usr_32.txt
  - If you make changes, undo, then make a different change, then undo, then make a different change, you create undo branches.
  - To view the change tree, run `:undolist`, to navigate the undo branches, use `g-`, `g+`
  - Go back to an earlier text state with the `:earlier` command. 
  - Go to  newer text state with the `:later` command. This command accepts the following time units: `s` (seconds), `h` (hours), `d` (days), and `f` (number of saves).

## Change the case of characters with `~`, `u` and `U`. 
  - `gUw` - Uppercase to end of word
  - `gUiw` - Uppercase entire word
  - `guap` - Lowercase paragraph

## Sort lines in Vim:
[sort-motion plugin](https://github.com/christoomey/vim-sort-motion) - The primary interface to this plugin is via the `gs` mapping, for sorting based on a text object or motion. 

Examples:

- `gs2j` => Sort down two lines (current + 2 below)
- `gsip` => Sort the current paragraph
- `gsii` => Sort the current indentation level (requires [text-obj-indent plugin](https://github.com/kana/vim-textobj-indent))
- `gsi(` => Sort within parenthesis. `(b, c, a)` would become `(a, b, c)`

Vim has some built in options

- `:sort` - sort all lines
- `:sort!` - sort in reverse
- `:sort u` - remove dupes and sort
- `:sort i` - ignore case
- `:sort n` - sort numerically

There are ways to sort elements of a single line in vanilla vim as well, as detailed in this [StackExchange response](https://vi.stackexchange.com/questions/17532/is-there-an-efficient-way-to-sort-a-selection-of-comma-separated-values-in-a-sin/17538#17538), but they will involve some regex.

## jump between changes
- `:changes` - Show list of changes
- `g;` - Jump to previous
- `g,` - Jump to next

## :norm 
The command allows you to execute normal mode operations from the command line. By combining with `%` , we can run a sequence of operations on an entire file. 

- `:%norm` - Run a normal mode command on the entire file.
- `ysiw` - [surround plugin](https://github.com/tpope/vim-surround)
- `:%norm ysiw"A: ""`
    
## ` character
- <code>`[</code> - Navigate to the beginning of your most recently **yanked** or **changed** text
- <code>`]</code> - Navigate to the end of your most recently **yanked** or **changed** text

## Ex Command-line
- `:set noignorecase` - make searches case sensitive (the default)
- `:set hlsearch` - highlight the remaining matches with the search highlight group.
- `:set splitright` - open splits in a right direction.
- `:set splitbelow` - open splits in a below direction.
- `:set laststatus=3` - show only one activeted single status bar
- `:edit!` - revert (go back or return to) all changes to the current buffer.
- `:1,5j` - Use the ex command `j` to join some lines on a range. Use visual selection, and J to join or 'gJ' to join without spacing
- Use `%:h` to get the path part of the current file. i.e., `cd %:h` to set the working directory to the directory of the current file.
- Use `:reg` to view the contents of all registers, or `:reg{register}` to view the contents of one.
- `:Man` command - Open that command's man page
- `:dig` - open a list of all digraphs available on your system (complication options can affect the list)
- `:reg` - open the vim registers
- Toggle Vim boolean options
    - adding a bang `!` at the end. `:set number!`, `:set cusorcolumn!`
    - `:set number` will turn the feature on
    - `:set nonumber` will turn the feature off
- Check the current state of any option by adding a question mark `?` to the end: `:set number?`  will return either `number` or `nonumber` depending on if the option is on or off.
- Repeat the history command
    - Enter command mode `:` and then press `<C-p>` to cycle back through your history, finding a command and invoking it again.
    - if the command was the last colon command you ran, simply press `@:` to repeat the last command.j
- Delete using the `"_d{motion}` command to delete without overwriting your default register.
- [Non-printable Characters](https://vimtricks.com/p/vimtrick-non-printable-characters/) `^M` is a single character inserted by using `CTRL-v`
followed by `CTRL-m`. [UTF-8 C1 Controls and Latin1 Supplement](https://www.w3schools.com/charsets/ref_utf_latin1_supplement.asp)
    
## Others
1. You can edit your visual selection by using  `o` to bounce your cursor to the opposite end of the selection. Adjust the top bound as needed, then press `o` to return to the bottom.
2. Use `gv` in Vim to reselect the last visual selection
3. [filename-modifiers](http://vimdoc.sourceforge.net/htmldoc/cmdline.html#filename-modifiers)。[关于Unix：在Vim中打开与当前文件相同的文件夹中的文件](https://www.codenong.com/1708623)
    
    `:p` Make file name a full path, `:h expand`, `:wildcards`
    
4. Use `ea` to append to the end of the current word.
5. Swap two characters in Vim with `xp`
6. Put from the `"%p` register to put the name of the current file.
7. To make it easier to navigate conflict markers, you could tweak the built-in matchit plugin: [stackoverflow.com/a/71676129/853…](http://stackoverflow.com/a/71676129/853%E2%80%A6)
8. Multiple cursor support 
9. Open the quickfix window with `:cwin` and see the results. Next we do another search. To get back to our previous, older quickfix window, we use `:colder`. Then, we can return to the most recent search results with `:cnewer`.
10. To find out what’s stored in each register, simply use Vim’s `:registers` command, or `:reg` for short.
11. Use `m{capital letter}` to make a global mark. Close and reopen VIm, and press `'{capital letter}` to open the file w/ the global mark.
12. 使用命令 `:mksession ~/.mysession.vim` ( `:mks` is ok) 保存已经打开的多窗口文件。 如果文件重复，vim 默认会报错，使用 `:mksession! ~/.mysession.vim` 代替。在终端输入命令 `vim -S ~/.mysession.vim` 打开保存的会话。
13. `.` 小数点可以重复上一次的命令
14. `N<command>` 重复某个命令 N 次
15. args
    - `:args /path/*`
    - `:wn`

[https://vimtricks.com/p/vimtrick-edit-files-sequentially/](https://vimtricks.com/p/vimtrick-edit-files-sequentially/) - Edit files sequentially

## Helps
- `:help wildoptions` - command-line completion allows fuzzy-matching in some cases
- `:help registers` - `"0p` will paste from the `0` register, which automatically contains the last yanked text.
- `:help global`
- `:help no-greedy` -  because `.*` is *greedy*. It matches the maximum amount of text it can. `.\{-}` will match the fewest characters possible to make a match.
- `:help jumplist` - jumps are cursor movements stored in a list called the jumplist. movements which modify the jump list are:
    - `/pattern` searches and `?pattern`searches (forward and backward pattern matching)
    - `*` and `#` (forward and backward search for the word under the cursor.
    - `%` (jump to a matching enclosing character like paren, brace, bracket, etc)
    - Any inter-file navigation like `gf`
- `:help scroll-cursor`
- `:help option-list` - all vim options
- `:help usr<tab>`
- `:help buffer`
- `:help window`
- `:help <tab>`
- `:help split`
- `:help motion`
- `:help options`
- `:help <tabcomplate or ctrl-d>`
- `:help <specific option name>`
- `:help quickfix`
- `:help macros`
- `:help motions`
- `:help substitude`
- `:help g`
