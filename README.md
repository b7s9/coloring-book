# Coloring Book (blue team)

## Description of Project
This is where we will describe what this project does

## Usage Instructions
tbd

## Installation Instructions

Install dependencies
```
cd $this_project_directory
npm install
npm install -g http-server
```
if you haven't set permissions on your local folders, you may need to install `http-server` with `sudo`
```
sudo npm install -g http-server
```
Build project (tbd)

Serve project on localhost
```
cd $this_project_directory
http-server ./src -s -c-1
```
The project will then be available on http://localhost:8080

## Project Requirements
[Full requirements](https://github.com/philsinatra/IDM-T380/blob/master/docs/project.md) doc on Phil's repo

### Must Haves

- [ ] Color Picker
- [x] Image library (multiple coloring pages)
- [x] Attribution for each image
- [ ] Works on mobile devices, viewports ranging 360 – 1440px
- [ ] Built with task runners, bundlers, scripts, continuous integration, git hooks etc.
- [x] Built with Git
- [x] Runs on live production server

### Nice to Haves
- [ ] Export svg/png/jpg
- [ ] Undo steps feature
- [ ] Save/Load
- [ ] Sharable link
- [ ] Multi-user live editing (google docs)
- [ ] User Account logins
