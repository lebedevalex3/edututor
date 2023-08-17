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
    {
      type: 'category',
      label: 'Многочлены',
      items: ['algebra/polinomials/doc3'],
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
    {
      type: 'category',
      label: 'Решение прямоугольных треугольников',
      items: ['geometry/solution-right-triangles/doc1'],
    },
    {
      type: 'category',
      label: 'Стереометрия',
      items: ['geometry/stereo-basic/doc1', 'geometry/stereo-basic/doc2'],
    },
  ],
  arifmet: [
    {
      type: 'category',
      label: 'Целые числа',
      items: ['arithmetic/001wholeNumbers/doc1'],
    },
    {
      type: 'category',
      label: 'Делимость натуральных чисел',
      link: {
        type: 'doc',
        id: 'arithmetic/01divNumbers/introTodivNumbers',
      },
      items: [
        'arithmetic/01divNumbers/doc1',
        'arithmetic/01divNumbers/doc2',
        'arithmetic/01divNumbers/doc3',
        'arithmetic/01divNumbers/doc4',
        'arithmetic/01divNumbers/doc5',
        'arithmetic/01divNumbers/doc6',
      ],
    },
    {
      type: 'category',
      label: 'Обыкновенные дроби',
      items: [
        'arithmetic/02commonFraction/doc1',
        'arithmetic/02commonFraction/doc2',
        'arithmetic/02commonFraction/doc3',
        'arithmetic/02commonFraction/doc4',
      ],
    },
  ],
  ege: [
    {
      type: 'category',
      label: 'Параметр',
      items: ['ege/parametr/linear-inequality/doc1'],
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
