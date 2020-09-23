Python Documentation Site Example
=================================
This example was developed to demonstrate how Docusaurus, Sphinx, and GitHub actions can be used 
to easily add a website landing to a project. 

This project is based on Ken Reitz's excellent Python starting project: 
`Learn more <http://www.kennethreitz.org/essays/repository-structure-and-python>`_.

If you want to learn more about ``setup.py`` files, check out `this repository <https://github.com/kennethreitz/setup.py>`_.

We added `Sphinx <https://www.sphinx-doc.org/en/master/>`_ and `Docusaurus 2 <https://v2.docusaurus.io/>`_ for documentation. 


Testing this project
--------------------

To test this project in your own repo, follow these steps:

1. Fork this repo.
2. Turn GitHub Pages on in Settings
3. Enable the GitHub Actions workflow
4. Customize your site in website
5. Customize the API content in /sphinx and source

Changes should trigger a rebuild.

Your site should be available at https://reponame.github.io/pydocsite. 

The GitHub action uses James Ives `GitHub Deploy Action <https://github.com/JamesIves/github-pages-deploy-action>`_. 

