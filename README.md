# HLEGAL — Law Company Website

Responsive multi-page website for a fictional law firm, built as my final project for the Hillel IT School Front-end Basic course.

The project follows the HLEGAL Figma design and uses HTML, SCSS, and vanilla JavaScript.

## Features

- Mobile-first responsive layouts
- Mobile navigation menu
- Light and dark header styles
- Contact form modal
- Form validation and international phone number input
- Demo submission feedback and form reset
- Interactive achievements switcher
- SVG icons, gradient headings, and hover effects

## Pages

- Home — `index.html`
- About us — `about.html`
- Services — `services.html`
- Service details — `service_entry.html`
- Team — `team.html`
- Team member profile — `team_entry.html`
- Publications — `publications.html`
- Publication details — `publication_entry.html`
- Contact — `contacts.html`

## Technologies

- HTML5
- CSS3: Flexbox and Grid
- SCSS: modules, variables, nesting, and mixins
- Vanilla JavaScript
- intl-tel-input
- Git and GitHub

## Responsive Design

The layouts were developed for the following reference widths:

- 375 px
- 768 px
- 1024 px
- 1440 px
- 1920 px

## Run Locally

1. Clone the repository:
   git clone https://github.com/Nachkar-PSA/Project_final.git
2. Open the project folder in Visual Studio Code.
3. Start Live Server from index.html.
The compiled stylesheet is included in css/style.css, so Sass compilation is only needed when editing the SCSS source files.

To update the styles, start Watch Sass using the Live Sass Compiler extension. The main SCSS file is styles/style.scss; the compiled output should go to css/style.css.

## Project Structure

```text
Project_final/
├── css/                  # Compiled CSS and source map
├── image/                # Images, logos, and SVG icons
├── js/
│   └── script.js         # Navigation, forms, and interactions
├── styles/
│   ├── abstracts/        # Variables and mixins
│   ├── base/             # Reset, fonts, colors, and typography
│   ├── layout/           # Page and section styles
│   └── style.scss        # Main SCSS entry point
├── index.html
├── about.html
├── services.html
├── service_entry.html
├── team.html
├── team_entry.html
├── publications.html
├── publication_entry.html
└── contacts.html
```

Demo Limitations
This is an educational frontend project without a backend.
- Forms validate input and show demo feedback; messages are not sent.
- Some links remain placeholders where destinations were not provided.
- Detailed service and team member pages are implemented for the examples included in the project.
- The News / Articles control does not filter publication content.
  
What I Practiced
- Translating a Figma design into responsive pages
- Building layouts with Flexbox and CSS Grid
- Organizing styles with Sass modules and reusable mixins
- Implementing navigation and form interactions in JavaScript
- Working with SVG graphics and responsive images
- Using semantic HTML and accessible labels
- Managing changes with Git and GitHub
  
Design Credits
Based on the HLEGAL 2.1 educational Figma template. The original design and supplied assets belong to their respective owners.

Author
[Nachkar-PSA](https://github.com/Nachkar-PSA)
