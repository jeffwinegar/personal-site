---
title: Setting up my M1 Mac for Development
date: 2021-12-10
categories:
  - Other
  - Reference
share:
  description: It's hard to remember all the things you need to do to set up a proper development environment. Here's how I did it.
---

<aside class="callout">

It's hard to remember all the things you need to do to set up a proper development environment so I am mainly writing this for my own reference (you're welcome future me).

</aside>

Getting a new computer is exciting—until you start setting it up—then all the questions and anxiety kick in. This feeling was increased upon getting my new Macbook Pro M1 Max. I didn't even consider that despite Apple's M1 chip being out for about a year, some things still haven't been updated to support it yet. I wanted to make sure I got all the Apple Silicon versions for everything I could. For this I've been using [Does It ARM?](https://doesitarm.com/) to see what has been ported to Apple Silicon, runs using Rosetta, or doesn't work yet.

I'm primarily a frontend developer, so most of my needs will revolve around Javascript and (_spoiler_) so far I haven't had to jump through any Rosetta hoops to get things working for my needs.

## macOS setup

First run through the initial setup then check for software updates, ensure that the operating system is at the latest point release. After all updates have been applied, restart the computer.

### Configure the Trackpad

I like being able to move windows around using three fingers instead of clicking with one finger and moving with another. You can set this up by going to _System Preferences > Accessibility > Motor:Pointer Control > Mouse & Trackpad > Trackpad Options... > Enable dragging > three finger drag_

### Configure Security

_System Preferences > Security & Privacy_

- Under _General_, set _Require password after sleep or screen saver begins_ to _1 minute_
- Select _Use your Apple Watch to unlock apps and your Mac_
- In the bottom left _Click the lock to make changes_ then click _Advanced..._, select _Require an administrator password to access system-wide preferences_
- Under _FileVault_ ensure it is turned on
- Under _Firewall_ click _Turn Firewall On_
- Under _Privacy > Location Services_ deselect all apps you don't want to see your location. I keep on _Weather.app, Home.app, Calendar.app, Wallet, and System Services_

### Configure Sharing

_System Preferences > Sharing_ change _Computer Name_

### Configure Spotlight

Remove from menu bar. I exclusively use the shortcut `Command + Space` to launch.

Go to _System Preferences > Spotlight_ and deselect everything except _Applications, Calculator, Definition, and System Preferences_.

### Configure the Dock

Remove all unnecessary app icons. I only keep my regularly used apps in the Dock.

I like to separate my app icons in the Dock into visual sections using this spacer tile. Open Terminal.app and enter the first command below for as many spaces as you'd like. To have them show up you must force restart the Dock by running the second command. To remove, drag them off the Dock like any other icon.

```shell
defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'

killall Dock
```

### Configure Screenshots

I like to keep my Desktop completely clean. Because of this I change where my screenshots are saved. To do this use the shortcut `Command + Shift + 5` then click on _Options_ and change _Save to_ to _Other Location..._ then select the _Downloads_ folder. Also while we are in the options lets uncheck _Show Floating Thumbnail_.

### Configure Safari

Let's secure Safari a bit and make the devtools available.

_Safari > Preferences > General_ deselect _Open "safe" files after downloading_.

_Safari > Preferences > Privacy_ ensure _Hide IP address_ is selected and set to _from Trackers and Websites_.

_Safari > Preferences > Advanced_. While we are in the settings select _Show Develop menu in menu bar_.

## Development setup

To start, you first need to install the Xcode Command Line Tools. _**Note:** You **don't** need to install Xcode from the App Store if you don't plan on doing any macOS or iOS development. However, you will need to rerun this command after every system update_.

```shell
xcode-select --install
```

### Homebrew

[Homebrew](https://brew.sh/) is a package manager for macOS. I'll use it to install some packages I need so let's get it. _**Note:** At this time [not all Homebrew packages support Apple Silicon](https://doesitarm.com/kind/homebrew/) so you may need Rosetta to install one. There are additional steps to get that to work, instead I found other ways to install some things I needed outside of Homebrew_.

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow install instructions. On M1 Macs Homebrew is now installed in a different directory than it used to be so we will need to add Homebrew to our PATH. If you missed the instructions the two commands are _(make sure to change **username** to your user name)_:

```shell
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/username/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

To check that Homebrew installed correctly, run this command:

```shell
brew doctor
```

### Oh My Zsh

Zsh is the default terminal shell for macOS. [Oh My Zsh](https://ohmyz.sh/) is an open source framework for managing your Zsh configuration.

```shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Oh My Zsh will create a configuration file for us so now we can add some plugins and a theme at `~/.zshrc` to customize our terminal window. We will use the keyboard shortcut `Command + Shift + .` to show hidden files so we can see it.

#### Zsh Plugins and Themes

The plugins and themes I currently have set up are:

**[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh)**  
First clone repository. (defaulted to `~/.oh-my-zsh/custom/plugins`)

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Then add the plugin to the list of plugins for Oh My Zsh to load

```ini title="~/.zshrc"
plugins=(
  # other plugins
  zsh-autosuggestions
)
```

**[Starship](https://starship.rs/)**  
I have been using Starship for a little while now and have liked it. It is Rust based so it's really fast and is easily customizable.

_**Prerequisite:**_ Choose a [Nerd Font](https://www.nerdfonts.com/) to install and enable in your terminal. I had previously tried [Powerlevel10k](https://github.com/romkatv/powerlevel10k#get-started) so I stuck with [the recommended font](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k) I set up for that. To set up the Apple Terminal.app go to _Terminal > Preferences > Profiles > Text_, click _Change..._ under _Font_ and select `MesloLGS NF` family (or the nerd font family you installed). We will go over setting up Visual Studio Code in that section.

To install we will use Homebrew:

```shell
brew install starship
```

Then we will need to go into our `~/.zshrc` file to add this at the end:

```shell
# Custom prompt via https://starship.rs
eval "$(starship init zsh)"
```

Now we can get started customizing. We will set up a config file at `~/.config/starship.toml`, this is how I have my config set up (which is heavily borrowed from Jason Lengstorf's config) but you can tweak almost anything you want, check out Starship's [configuration documentation](https://starship.rs/config/) for everything you can do _(the 'git_branch' and 'package' symbols should show correctly with your installed nerd font)_.

```toml
[aws]
disabled = true

[directory]
truncate_to_repo = false

[directory.substitutions]
"~/dev/github" = "github.com"

[gcloud]
disabled = true

[git_branch]
symbol = " "

[nodejs]
format = "using [$symbol($version)]($style) "

[package]
display_private = true
format = "[$symbol($version)]($style) "
symbol = " "
```

### Git

Now that you have Homebrew installed and your terminal set up, let's get our development tools installed.

First, Xcode Command Line Tools includes a copy of [Git](https://www.git-scm.com) but this will be out of date so lets use Homebrew to install the latest version.

```shell
brew install git
```

However because of Homebrew's new directory path on M1 Macs you need to make sure it is pointing to the updated version and not the Xcode CLT version. Let's check:

```shell
which git
```

If you see a return of `/user/bin/git` it is still pointing to the Xcode version. I found the easiest way to fix this is to run this command and follow the instructions:

```shell
brew doctor
```

Now when you run `which git` you should see `/opt/homebrew/bin/git` and if you run

```shell
git --version
```

You should see the latest version of Git.

Next, lets set up some configurations. We will start with our global configuration file by creating it in our root directory.

```shell
touch ~/.gitconfig
```

```ini title="~/.gitconfig"
[user]
  name = Firstname Lastname
  email = you@example.com
[init]
  defaultBranch = main
```

Then let's set up a global ignore file.

```shell
touch ~/.gitignore_global
```

```ini title="~/.gitignore_global"
# macOS files
.DS_Store

# VSCode
.vscode/*

# Local History
.history/

# Logs
logs
*.logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Optional eslint cache
.eslintcache

# Misc
*.ignored.*
ignored/
```

Let's go back to our `.gitconfig` file and add our `.gitignore_global` file to our configuration. Additionally you can add more configurations including aliases _(make sure to change **username** to your user name)_.

```diff title="~/.gitconfig"
  [user]
    name = Firstname Lastname
    email = you@example.com
+ [core]
+   excludefile = /Users/username/.gitignore_global
  [init]
    defaultBranch = main

# Add any other configurations you'd like.
```

### NVM and Node

Let's use [Node Version Manager](https://github.com/nvm-sh/nvm) to control our Node.js install. This allows you to easily switch between node versions, which is essential. _**Note: Do not use Homebrew to install NVM.** Doing so will run Node.js on Rosetta not Apple Silicon and is noted as not being supported by the NVM team._

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

To verify installation, run:

```shell
command -v nvm
```

which should output `nvm` if successful.

Now we can install node. _**Note:** For Macs with the M1 chip, node started providing **arm64** arch darwin packages since v16.0.0. so, without messing with Rosetta, you will not be able to install node versions lower than v16._

```shell
nvm install node # "node" is an alias for the latest version
# or
nvm install 'lts/*' # for the long-term stable version
# or
nvm install 16 # or 16.3.0, 17, etc. for a specific version of node
```

restart your terminal and run:

```shell
nvm use node # or 'lts/*', --lts, 16, etc
```

Additional useful commands:

```shell
# To set a default Node version to be used in any new shell, use the alias 'default'
nvm alias default node # or 'lts/*', --lts, 16, etc

# To see what versions you have installed
nvm ls

# To see what versions are available to install
nvm ls-remote

# To install a new version of Node.js and migrate npm packages from a previous version
nvm install node --reinstall-packages-from=node

# To get the latest LTS version of node and migrate your existing installed packages
nvm install 'lts/*' --reinstall-packages-from=current

# To get the latest supported npm version on the current node version
nvm install-latest-npm
```

### Text Editor

My text editor of choice is [Visual Studio Code](https://code.visualstudio.com/). Check out my [uses page](/uses) to see what theme and font I am currently using. I use VS Code's integrated terminal 99% of the time so I don't use a terminal emulator. If you are using a Nerd Font in your Zsh theme make sure you add it to your font family in the settings after your main font choice so your theme works properly in the integrated terminal. Mine looks like this:

```json
{
  "editor.fontFamily": "FiraCode-Retina, 'MesloLGS NF', Menlo, Monaco, 'Courier New', monospace"
}
```

### Project Directory Structure

To keep my projects organized I follow this guideline. Create a top level directory with a short generic name like _dev_. Inside this directory create a sub-directory for each repository host and inside that create a sub-directory that matches your username. You will check out your projects into this directory. Your final structure will look like this:

```
~/dev/github/githubusername/project
```

Also, with some additional configuration in your Zsh theme, structuring your directories this way allows you to create a direct link to your remote repository right in your terminal. I learned this from Jason Lengstorf on one of his [Learn with Jason](https://www.learnwithjason.dev/) streams, which I highly recommended checking out.

### GitHub CLI

[GitHub CLI](https://cli.github.com/) is one of my most used CLIs. It makes working with GitHub so much easier and quicker without having to leave your terminal. Check out [the manual](https://cli.github.com/manual/) to see everything you can do.

To install we will use Homebrew.

```shell
brew install gh
```

Now let's set up your authentication with GitHub. The default authentication mode is a web-based browser flow so you will be prompted to login to GitHub (if you're not already) and allow access. You can set up manually if you want but I found this much simpler and this is [the promoted way](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#authenticating-with-the-command-line) to connect to your account on GitHub.

```shell
gh auth login
```

There you have it. That's my setup so far. This is the first time I took some time to carefully consider my setup at the beginning when getting a new computer. We will see how things evolve and if I make any changes and/or adjustments as I continue to use this setup. My next step will be creating a repository of all my dotfiles for future use. I may do a write up on my experience with that...stay tuned.
