# class Employee:
#     num_of_emps=0
#     raise_amt= 1.04


#     def __init__(self, first,last,pay):
#         self.first= first
#         self.last= last
#         self.pay= pay
#         self.email=first + '.'+ last + "@comapany.com"

#         Employee.num_of_emps+=1
    
#     def fullname(self):
#         return '{} {}'.format(self.first,self.last)
    
#     def apply_raise(self):
#         self.pay= int(self.pay*self.raise_amt)

#     @classmethod
#     def set_raise_amt(cls,amount):
#         pass



# emp_1 = Employee('Kaustubh','shakelli', 50000)
# emp_2 = Employee('Test','Run',90000)




#Encapsulation 

# class Employee:
#     def __init__(self, name, salary):
#         self.name = name       
#         self.__salary = salary 

#     def get_salary(self):       
#         return self.__salary

#     def set_salary(self, amount):  
#         if amount > 0:
#             self.__salary = amount
#         else:
#             print("Salary must be +ve.")


#Abstraction
# from abc import ABC, abstractmethod # over here abc are abstract class in python to use Abstraction we use this class

# class Shape(ABC):
#     @abstractmethod
#     def area(self):
#         pass

#     @abstractmethod
#     def perimeter(self):
#         pass

# class Rectangle(Shape):
#     def __init__(self, width, height):
#         self.width = width
#         self.height = height

#     def area(self):
#         return self.width * self.height

#     def perimeter(self):
#         return 2 * (self.width + self.height)


class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Some generic sound"

class Dog(Animal):  
    def speak(self):
        return "Woof"

dog = Dog("Buddy")
print(dog.speak())  



class Cat(Animal):
    def speak(self):
        return "Meow"

def make_animal_speak(animal):
    print(animal.speak())

# Using polymorphism
animals = [Dog("Buddy"), Cat("Whiskers")]
for animal in animals:
    make_animal_speak(animal)

