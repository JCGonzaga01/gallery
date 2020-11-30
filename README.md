# Project Overview

This project was intended first to be the gallery page of [my personal website](https://jcgonzaga01.github.io/).
But due to its flexibility to be an independent website or page, I made and built this poject to be easily modifieble so you can still use this as your template in building your own gallery.

#### Note when using this project as your template

If you happen to encounter some not so programmer friendly configuration upon following the below instructions, kindly send me an email at [my personal email](mailto:gonzaga.jc1993@gmail.com) or file an issue ticket in this repo.

## Project Structure

This project was built using below technologies:

1.  [ReactJS](https://reactjs.org/)
2.  [ReactHooks](https://reactjs.org/docs/hooks-intro.html)
3.  [Redux](https://redux.js.org/)
4.  [Redux-Typescript](https://github.com/piotrwitek/react-redux-typescript-guide)
5.  [Typescript](https://www.typescriptlang.org/)
6.  [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
7.  **HTML/SCSS**
8.  [Webpack](https://webpack.js.org/)

## Prerequisite

Make sure you have installed the ff. in your local machine:

1.  [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2.  [NodeJS](https://nodejs.org/en/download/)
3.  [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## How to set up the project?

You may wish to fork this repository or remove my remote origin and add your own. Go [here](https://help.github.com/articles/changing-a-remote-s-url/) for more information on how to change remotes. But I highly suggest you fork this repo for monitoring.

1.  To download the repository and install dependencies, run the following commands:

```bash
git clone https://github.com/JCGonzaga01/gallery.git [YOUR_PREFERRED_REPO_NAME]

cd [YOUR_PREFERRED_REPO_NAME]

yarn install
```

2. Once installed, run the following command to build the application and serve it with hot module reloading:

```bash
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view running project.

This completes the set up instructions. Please continue reading below to learn on how to modify this site to make it your own.

## Checklist

1. Start by changing the Logo of this site, go to `src/assets` folder then update `headerLogo.png` to your own logo.

2. Then proceed to `src/services/apiClient/gallery.ts` file.
   IF will use API to fetch images, declare your api url in there.
   ELSE IF will use local images, go to `src/constants/_galleryList.ts_TEMP` and remove the `_TEMP` in file name
   and declare all your local images in that file.
   then, go to `src/services/apiClient/gallery.ts` file and use the predefined syntax to call to call local images

3. Next, go to `src/constants` folder and update all constant information in there except `_galleryList.ts_TEMP`.

4. You can also change the website color theming at `src/helpers/stylings/global.scss`.

## Build and Deploy

1. To build the project, just run the below command.

```bash
yarn build
```

2. If you fork this repository in your own github account and wants to deploy it in github hosting, you can just run the below command to auto deploy and host your project.

```bash
yarn deploy
```

Running the above command will create new git branch named `gh-pages`.
To know more on how to host repo project in Github properly, kindly read this [article](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for more information.

## Acknowledgements

1. Template was based on [Lens](https://html5up.net/lens) by [@ajlkn](https://github.com/ajlkn)

## Reminder

- Please don't forget to send love and support by giving star to this project.
- If you encounter some issues or would like to add some enhancement, never hesitate to file an issue ticket and send PR.

## License

[MIT](https://github.com/JCGonzaga01/gallery/blob/master/LICENSE)
