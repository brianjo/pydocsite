# PyTorch Overview

<a href="https://colab.research.google.com/github/brianjo/pydocsite/blob/master/tutorials/notebook.ipynb">Open in Google Colab</a>




```python
%matplotlib inline
```


What is PyTorch?
================

It’s a Python-based scientific computing package targeted at two sets of
audiences:

-  A replacement for NumPy to use the power of GPUs
-  a deep learning research platform that provides maximum flexibility
   and speed

Getting Started
---------------

Tensors
^^^^^^^

Tensors are similar to NumPy’s ndarrays, with the addition being that
Tensors can also be used on a GPU to accelerate computing.




```python
from __future__ import print_function
import torch
```

<div class="alert alert-info"><h4>Note</h4><p>An uninitialized matrix is declared,
    but does not contain definite known
    values before it is used. When an
    uninitialized matrix is created,
    whatever values were in the allocated
    memory at the time will appear as the initial values.</p></div>



Construct a 5x3 matrix, uninitialized:




```python
x = torch.empty(5, 3)
print(x)
```

    tensor([[0.0000e+00, 0.0000e+00, 0.0000e+00],
            [0.0000e+00, 0.0000e+00, 0.0000e+00],
            [0.0000e+00, 0.0000e+00, 0.0000e+00],
            [0.0000e+00, 2.8026e-45, 0.0000e+00],
            [1.1210e-44, 0.0000e+00, 1.4013e-45]])


Construct a randomly initialized matrix:




```python
x = torch.rand(5, 3)
print(x)
```

    tensor([[0.9477, 0.6005, 0.2741],
            [0.8690, 0.9099, 0.8350],
            [0.7692, 0.2723, 0.8630],
            [0.6839, 0.7906, 0.9392],
            [0.5080, 0.8420, 0.6506]])


Construct a matrix filled zeros and of dtype long:




```python
x = torch.zeros(5, 3, dtype=torch.long)
print(x)
```

    tensor([[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]])


Construct a tensor directly from data:




```python
x = torch.tensor([5.5, 3])
print(x)
```

    tensor([5.5000, 3.0000])


or create a tensor based on an existing tensor. These methods
will reuse properties of the input tensor, e.g. dtype, unless
new values are provided by user




```python
x = x.new_ones(5, 3, dtype=torch.double)      # new_* methods take in sizes
print(x)

x = torch.randn_like(x, dtype=torch.float)    # override dtype!
print(x)                                      # result has the same size
```

    tensor([[1., 1., 1.],
            [1., 1., 1.],
            [1., 1., 1.],
            [1., 1., 1.],
            [1., 1., 1.]], dtype=torch.float64)
    tensor([[-1.2209,  0.9586,  0.2201],
            [-0.5286, -0.8107,  1.7925],
            [-0.1708,  0.5032, -2.0053],
            [ 2.1625,  0.1114, -0.2341],
            [ 0.0457, -0.6625, -0.6934]])


Get its size:




```python
print(x.size())
```

    torch.Size([5, 3])


<div class="alert alert-info"><h4>Note</h4><p>``torch.Size`` is in fact a tuple, so it supports all tuple operations.</p></div>

Operations
^^^^^^^^^^
There are multiple syntaxes for operations. In the following
example, we will take a look at the addition operation.

Addition: syntax 1




```python
y = torch.rand(5, 3)
print(x + y)
```

    tensor([[-1.0017,  1.0786,  0.8398],
            [ 0.2837, -0.2345,  2.7909],
            [ 0.1279,  1.2608, -1.9691],
            [ 3.1221,  0.5977, -0.1666],
            [ 0.5501, -0.0969, -0.1751]])


Addition: syntax 2




```python
print(torch.add(x, y))
```

    tensor([[-1.0017,  1.0786,  0.8398],
            [ 0.2837, -0.2345,  2.7909],
            [ 0.1279,  1.2608, -1.9691],
            [ 3.1221,  0.5977, -0.1666],
            [ 0.5501, -0.0969, -0.1751]])


Addition: providing an output tensor as argument




```python
result = torch.empty(5, 3)
torch.add(x, y, out=result)
print(result)
```

    tensor([[-1.0017,  1.0786,  0.8398],
            [ 0.2837, -0.2345,  2.7909],
            [ 0.1279,  1.2608, -1.9691],
            [ 3.1221,  0.5977, -0.1666],
            [ 0.5501, -0.0969, -0.1751]])


Addition: in-place




```python
# adds x to y
y.add_(x)
print(y)
```

    tensor([[-1.0017,  1.0786,  0.8398],
            [ 0.2837, -0.2345,  2.7909],
            [ 0.1279,  1.2608, -1.9691],
            [ 3.1221,  0.5977, -0.1666],
            [ 0.5501, -0.0969, -0.1751]])


<div class="alert alert-info"><h4>Note</h4><p>Any operation that mutates a tensor in-place is post-fixed with an ``_``.
    For example: ``x.copy_(y)``, ``x.t_()``, will change ``x``.</p></div>

You can use standard NumPy-like indexing with all bells and whistles!




```python
print(x[:, 1])
```

    tensor([ 0.9586, -0.8107,  0.5032,  0.1114, -0.6625])


Resizing: If you want to resize/reshape tensor, you can use ``torch.view``:




```python
x = torch.randn(4, 4)
y = x.view(16)
z = x.view(-1, 8)  # the size -1 is inferred from other dimensions
print(x.size(), y.size(), z.size())
```

    torch.Size([4, 4]) torch.Size([16]) torch.Size([2, 8])


If you have a one element tensor, use ``.item()`` to get the value as a
Python number




```python
x = torch.randn(1)
print(x)
print(x.item())
```

    tensor([-1.2526])
    -1.2525806427001953


**Read later:**


  100+ Tensor operations, including transposing, indexing, slicing,
  mathematical operations, linear algebra, random numbers, etc.,
  are described
  `here <https://pytorch.org/docs/torch>`_.

NumPy Bridge
------------

Converting a Torch Tensor to a NumPy array and vice versa is a breeze.

The Torch Tensor and NumPy array will share their underlying memory
locations (if the Torch Tensor is on CPU), and changing one will change
the other.

Converting a Torch Tensor to a NumPy Array
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




```python
a = torch.ones(5)
print(a)
```

    tensor([1., 1., 1., 1., 1.])



```python
b = a.numpy()
print(b)
```

    [1. 1. 1. 1. 1.]


See how the numpy array changed in value.




```python
a.add_(1)
print(a)
print(b)
```

    tensor([2., 2., 2., 2., 2.])
    [2. 2. 2. 2. 2.]


Converting NumPy Array to Torch Tensor
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
See how changing the np array changed the Torch Tensor automatically




```python
import numpy as np
a = np.ones(5)
b = torch.from_numpy(a)
np.add(a, 1, out=a)
print(a)
print(b)
```

    [2. 2. 2. 2. 2.]
    tensor([2., 2., 2., 2., 2.], dtype=torch.float64)


All the Tensors on the CPU except a CharTensor support converting to
NumPy and back.

CUDA Tensors
------------

Tensors can be moved onto any device using the ``.to`` method.




```python
# let us run this cell only if CUDA is available
# We will use ``torch.device`` objects to move tensors in and out of GPU
if torch.cuda.is_available():
    device = torch.device("cuda")          # a CUDA device object
    y = torch.ones_like(x, device=device)  # directly create a tensor on GPU
    x = x.to(device)                       # or just use strings ``.to("cuda")``
    z = x + y
    print(z)
    print(z.to("cpu", torch.double))       # ``.to`` can also change dtype together!
```
