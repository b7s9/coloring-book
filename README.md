# Coloring Book (blue team)

## Description of Project

In this project you can

-   select a page to color from a gallery of options
-   use point and click controls to color in shapes of a given image
-   undo/redo coloring steps

## Installation Instructions

Install dependencies. **Before running any of the following scripts, you must be in the root directory of this project**.

```bash
cd $this_project_directory
npm install
```

Build and Serve project on localhost

```bash
npm start
```

To skip the build and just serve on localhost
```bash
npm run serve
```

The project will then be available on http://localhost:8080. (it should automatically open in your default browser)

To develop locally, 
```bash
npm start
gulp watch
```

changes to development files will be copied to the distribution folder on save, but assets will need to be re-applied if updated. To copy assets to the `dist/` directory, run
```bash
# all assets
sh bin/static.sh -a
# or
npm run assets

# fonts
sh bin/static.sh -f

# images
sh bin/static.sh -i

# svg
sh bin/static.sh -s

```

## Project Requirements

[Full requirements](https://github.com/philsinatra/IDM-T380/blob/master/docs/project.md) doc on Phil's repo

### Must Haves

-   [x] Color Picker
-   [x] Image library (multiple coloring pages)
-   [x] Attribution for each image
-   [x] Works on mobile devices, viewports ranging 360 – 1440px
-   [x] Built with task runners, bundlers, scripts, continuous integration, git hooks etc.
-   [x] Built with Git
-   [x] Runs on live production server

### Nice to Haves

-   [x] Full spectrum color picker
-   [x] Undo/Redo steps feature
-   [x] Automated deployment script
-   [ ] Export svg/png/jpg
-   [ ] Save/Load
-   [ ] Sharable link
-   [ ] Multi-user live editing (google docs)
-   [ ] User Account logins
