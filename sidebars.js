/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Квадратные уравнения',
      items: ['algebra/square-equations/doc2'],
    },
    {
      type: 'category',
      label: 'Степень и свойства степени',
      items: [
        'algebra/degree_exponent/doc1',
        'algebra/degree_exponent/doc2',
        'algebra/degree_exponent/doc3',
      ],
    },
  ],
  geo: [
    {
      type: 'category',
      label: 'Вписанные и описанные четырехугольники',
      items: [
        'geometry/inscribed-quadrilateral/doc1',
        'geometry/inscribed-quadrilateral/doc2',
      ],
    },
    {
      type: 'category',
      label: 'Подобные треугольники',
      items: [
        'geometry/similar_triangles/doc1',
        'geometry/similar_triangles/doc2',
      ],
    },
  ],
  // latin: [
  //   {
  //     type: 'category',
  //     label: 'Учебник  Lingva Latina (Orberg)',
  //     items: ['latin/lesson16/lesson16'],
  //   },
  // ],
};

module.exports = sidebars;
