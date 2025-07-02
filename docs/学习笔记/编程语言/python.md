# Python 学习笔记

Python是一门解释型、面向对象、动态数据类型的高级程序设计语言。

## 基础语法

### 变量和数据类型

```python
# 基本数据类型
name = "Python"  # 字符串
age = 30         # 整数
height = 1.75    # 浮点数
is_student = True # 布尔值

# 集合类型
numbers = [1, 2, 3, 4, 5]        # 列表
coordinates = (3.14, 2.71)       # 元组
person = {"name": "Alice", "age": 25}  # 字典
unique_items = {1, 2, 3, 4, 5}   # 集合
```

### 控制结构

=== "条件语句"
    
    ```python
    score = 85
    
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    else:
        grade = "D"
    
    print(f"成绩等级: {grade}")
    ```

=== "循环语句"
    
    ```python
    # for循环
    for i in range(5):
        print(f"第{i+1}次循环")
    
    # while循环
    count = 0
    while count < 3:
        print(f"计数: {count}")
        count += 1
    
    # 列表推导式
    squares = [x**2 for x in range(10)]
    ```

## 函数定义

```python
def calculate_area(length, width):
    """计算矩形面积
    
    Args:
        length (float): 长度
        width (float): 宽度
    
    Returns:
        float: 面积
    """
    return length * width

# 调用函数
area = calculate_area(5, 3)
print(f"面积: {area}")
```

## 面向对象编程

```python
class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.grades = []
    
    def add_grade(self, grade):
        """添加成绩"""
        self.grades.append(grade)
    
    def get_average(self):
        """计算平均成绩"""
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)
    
    def __str__(self):
        return f"学生: {self.name} (ID: {self.student_id})"

# 使用类
student = Student("张三", "20210001")
student.add_grade(85)
student.add_grade(92)
print(f"{student}, 平均成绩: {student.get_average():.2f}")
```

## 常用库

### NumPy - 数值计算
```python
import numpy as np

# 创建数组
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])

# 数学运算
result = np.sqrt(arr)
print(f"平方根: {result}")
```

### Pandas - 数据处理
```python
import pandas as pd

# 创建DataFrame
data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['北京', '上海', '广州']
}
df = pd.DataFrame(data)
print(df)
```

## 实用技巧

!!! tip "Python技巧"
    
    1. **使用f-string格式化字符串**
       ```python
       name = "World"
       message = f"Hello, {name}!"
       ```
    
    2. **利用*args和**kwargs**
       ```python
       def flexible_function(*args, **kwargs):
           print(f"位置参数: {args}")
           print(f"关键字参数: {kwargs}")
       ```
    
    3. **使用enumerate获取索引**
       ```python
       items = ['apple', 'banana', 'cherry']
       for index, item in enumerate(items):
           print(f"{index}: {item}")
       ```

## 学习资源

- [Python官方文档](https://docs.python.org/zh-cn/3/)
- [Real Python](https://realpython.com/)
- [Python教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/1016959663602400)

---

Tags: #Python #编程语言 #基础语法 