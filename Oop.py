class Employee:
    num_of_emps=0
    raise_amt= 1.04


    def __init__(self, first,last,pay):
        self.first= first
        self.last= last
        self.pay= pay
        self.email=first + '.'+ last + "@comapany.com"

        Employee.num_of_emps+=1
    
    def fullname(self):
        return '{} {}'.format(self.first,self.last)
    
    def apply_raise(self):
        self.pay= int(self.pay*self.raise_amt)

    @classmethod
    def set_raise_amt(cls,amount):
        pass



emp_1 = Employee('Kaustubh','shakelli', 50000)
emp_2 = Employee('Test','Run',90000)



