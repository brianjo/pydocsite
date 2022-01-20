"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[873],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9349:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={},p="PyTorch Overview",s={unversionedId:"notebook",id:"notebook",title:"PyTorch Overview",description:"Open in Google Colab",source:"@site/docs/notebook.md",sourceDirName:".",slug:"/notebook",permalink:"/pydocsite/docs/notebook",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/notebook.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Guide to Writing Docs and Tutorials",permalink:"/pydocsite/docs/doc3"},next:{title:"Powered by MDX",permalink:"/pydocsite/docs/mdx"}},c=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Tensors",id:"tensors",children:[],level:2},{value:"Operations",id:"operations",children:[],level:2},{value:"NumPy Bridge",id:"numpy-bridge",children:[],level:2},{value:"Converting NumPy Array to Torch Tensor",id:"converting-numpy-array-to-torch-tensor",children:[],level:2},{value:"CUDA Tensors",id:"cuda-tensors",children:[],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pytorch-overview"},"PyTorch Overview"),(0,o.kt)("a",{href:"https://colab.research.google.com/github/brianjo/pydocsite/blob/master/tutorials/notebook.ipynb"},"Open in Google Colab"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%matplotlib inline\n")),(0,o.kt)("h1",{id:"what-is-pytorch"},"What is PyTorch?"),(0,o.kt)("p",null,"It\u2019s a Python-based scientific computing package targeted at two sets of\naudiences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A replacement for NumPy to use the power of GPUs"),(0,o.kt)("li",{parentName:"ul"},"a deep learning research platform that provides maximum flexibility\nand speed")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"tensors"},"Tensors"),(0,o.kt)("p",null,"Tensors are similar to NumPy\u2019s ndarrays, with the addition being that\nTensors can also be used on a GPU to accelerate computing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from __future__ import print_function\nimport torch\n")),(0,o.kt)("div",{class:"alert alert-info"},(0,o.kt)("h4",null,"Note"),(0,o.kt)("p",null,"An uninitialized matrix is declared, but does not contain definite known values before it is used. When an uninitialized matrix is created, whatever values were in the allocated memory at the time will appear as the initial values.")),(0,o.kt)("p",null,"Construct a 5x3 matrix, uninitialized:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"x = torch.empty(5, 3)\nprint(x)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([[-4.6892e+36,  4.5726e-41, -3.7127e+07],\n        [ 4.5726e-41, -3.5588e+07,  4.5726e-41],\n        [-1.5736e+32,  4.5726e-41, -3.5601e+07],\n        [ 4.5726e-41, -3.5601e+07,  4.5726e-41],\n        [-3.7131e+07,  4.5726e-41, -3.5777e+07]])\n")),(0,o.kt)("p",null,"Construct a randomly initialized matrix:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"x = torch.rand(5, 3)\nprint(x)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([[0.7571, 0.5106, 0.6600],\n        [0.4036, 0.0536, 0.9863],\n        [0.6367, 0.6357, 0.0528],\n        [0.9749, 0.9592, 0.4068],\n        [0.4229, 0.9711, 0.6112]])\n")),(0,o.kt)("p",null,"Construct a matrix filled zeros and of dtype long:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"x = torch.zeros(5, 3, dtype=torch.long)\nprint(x)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([[0, 0, 0],\n        [0, 0, 0],\n        [0, 0, 0],\n        [0, 0, 0],\n        [0, 0, 0]])\n")),(0,o.kt)("p",null,"Construct a tensor directly from data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"x = torch.tensor([5.5, 3])\nprint(x)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([5.5000, 3.0000])\n")),(0,o.kt)("p",null,"or create a tensor based on an existing tensor. These methods\nwill reuse properties of the input tensor, e.g. dtype, unless\nnew values are provided by user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"x = x.new_ones(5, 3, dtype=torch.double)      # new_* methods take in sizes\nprint(x)\n\nx = torch.randn_like(x, dtype=torch.float)    # override dtype!\nprint(x)                                      # result has the same size\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([[1., 1., 1.],\n        [1., 1., 1.],\n        [1., 1., 1.],\n        [1., 1., 1.],\n        [1., 1., 1.]], dtype=torch.float64)\ntensor([[ 3.2057e-02, -2.3059e+00,  6.1671e-01],\n        [-1.0105e+00, -1.1115e+00,  6.3565e-01],\n        [-5.7586e-01, -6.3653e-01, -2.7957e-01],\n        [-2.5741e-01,  1.2131e+00, -1.5545e+00],\n        [ 5.6841e-01,  4.7643e-04,  5.3185e-01]])\n")),(0,o.kt)("p",null,"Get its size:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(x.size())\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"torch.Size([5, 3])\n")),(0,o.kt)("div",{class:"alert alert-info"},(0,o.kt)("h4",null,"Note"),(0,o.kt)("p",null,"``torch.Size`` is in fact a tuple, so it supports all tuple operations.")),(0,o.kt)("h2",{id:"operations"},"Operations"),(0,o.kt)("p",null,"There are multiple syntaxes for operations. In the following\nexample, we will take a look at the addition operation."),(0,o.kt)("p",null,"Addition: syntax 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"y = torch.rand(5, 3)\nprint(x + y)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([[ 0.5420, -1.8934,  1.4264],\n        [-0.7760, -0.3698,  0.8481],\n        [ 0.2892, -0.4236,  0.0563],\n        [-0.0101,  1.9554, -1.1531],\n        [ 1.3454,  0.3963,  1.0418]])\n")),(0,o.kt)("p",null,"Addition: syntax 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(torch.add(x, y))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([[ 0.5420, -1.8934,  1.4264],\n        [-0.7760, -0.3698,  0.8481],\n        [ 0.2892, -0.4236,  0.0563],\n        [-0.0101,  1.9554, -1.1531],\n        [ 1.3454,  0.3963,  1.0418]])\n")),(0,o.kt)("p",null,"Addition: providing an output tensor as argument"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"result = torch.empty(5, 3)\ntorch.add(x, y, out=result)\nprint(result)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([[ 0.5420, -1.8934,  1.4264],\n        [-0.7760, -0.3698,  0.8481],\n        [ 0.2892, -0.4236,  0.0563],\n        [-0.0101,  1.9554, -1.1531],\n        [ 1.3454,  0.3963,  1.0418]])\n")),(0,o.kt)("p",null,"Addition: in-place"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# adds x to y\ny.add_(x)\nprint(y)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([[ 0.5420, -1.8934,  1.4264],\n        [-0.7760, -0.3698,  0.8481],\n        [ 0.2892, -0.4236,  0.0563],\n        [-0.0101,  1.9554, -1.1531],\n        [ 1.3454,  0.3963,  1.0418]])\n")),(0,o.kt)("div",{class:"alert alert-info"},(0,o.kt)("h4",null,"Note"),(0,o.kt)("p",null,"Any operation that mutates a tensor in-place is post-fixed with an ``_``. For example: ``x.copy_(y)``, ``x.t_()``, will change ``x``.")),(0,o.kt)("p",null,"You can use standard NumPy-like indexing with all bells and whistles!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(x[:, 1])\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([-2.3059e+00, -1.1115e+00, -6.3653e-01,  1.2131e+00,  4.7643e-04])\n")),(0,o.kt)("p",null,"Resizing: If you want to resize/reshape tensor, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"torch.view"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"x = torch.randn(4, 4)\ny = x.view(16)\nz = x.view(-1, 8)  # the size -1 is inferred from other dimensions\nprint(x.size(), y.size(), z.size())\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"torch.Size([4, 4]) torch.Size([16]) torch.Size([2, 8])\n")),(0,o.kt)("p",null,"If you have a one element tensor, use ",(0,o.kt)("inlineCode",{parentName:"p"},".item()")," to get the value as a\nPython number"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"x = torch.randn(1)\nprint(x)\nprint(x.item())\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([-0.4076])\n-0.40760505199432373\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Read later:")),(0,o.kt)("p",null,"  100+ Tensor operations, including transposing, indexing, slicing,\nmathematical operations, linear algebra, random numbers, etc.,\nare described\n",(0,o.kt)("inlineCode",{parentName:"p"},"here <https://pytorch.org/docs/torch>"),"_."),(0,o.kt)("h2",{id:"numpy-bridge"},"NumPy Bridge"),(0,o.kt)("p",null,"Converting a Torch Tensor to a NumPy array and vice versa is a breeze."),(0,o.kt)("p",null,"The Torch Tensor and NumPy array will share their underlying memory\nlocations (if the Torch Tensor is on CPU), and changing one will change\nthe other."),(0,o.kt)("p",null,"Converting a Torch Tensor to a NumPy Array\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"a = torch.ones(5)\nprint(a)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([1., 1., 1., 1., 1.])\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"b = a.numpy()\nprint(b)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[1. 1. 1. 1. 1.]\n")),(0,o.kt)("p",null,"See how the numpy array changed in value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"a.add_(1)\nprint(a)\nprint(b)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tensor([2., 2., 2., 2., 2.])\n[2. 2. 2. 2. 2.]\n")),(0,o.kt)("h2",{id:"converting-numpy-array-to-torch-tensor"},"Converting NumPy Array to Torch Tensor"),(0,o.kt)("p",null,"See how changing the np array changed the Torch Tensor automatically"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\na = np.ones(5)\nb = torch.from_numpy(a)\nnp.add(a, 1, out=a)\nprint(a)\nprint(b)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[2. 2. 2. 2. 2.]\ntensor([2., 2., 2., 2., 2.], dtype=torch.float64)\n")),(0,o.kt)("p",null,"All the Tensors on the CPU except a CharTensor support converting to\nNumPy and back."),(0,o.kt)("h2",{id:"cuda-tensors"},"CUDA Tensors"),(0,o.kt)("p",null,"Tensors can be moved onto any device using the ",(0,o.kt)("inlineCode",{parentName:"p"},".to")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# let us run this cell only if CUDA is available\n# We will use ``torch.device`` objects to move tensors in and out of GPU\nif torch.cuda.is_available():\n    device = torch.device("cuda")          # a CUDA device object\n    y = torch.ones_like(x, device=device)  # directly create a tensor on GPU\n    x = x.to(device)                       # or just use strings ``.to("cuda")``\n    z = x + y\n    print(z)\n    print(z.to("cpu", torch.double))       # ``.to`` can also change dtype together!\n')))}d.isMDXComponent=!0}}]);