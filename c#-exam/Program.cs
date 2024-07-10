using System;


class Program
{

    public static void fizzBuzz(int n)
    {
        for (int i = 0; i < n; i++)
        {
            if (i % 5 == 0 && i % 3 == 0)
            {
                Console.WriteLine("FizzBuzz");
            }
            else if (i % 3 == 0 && i % 5 != 0)
            {
                Console.WriteLine("Fizz");
            }
            else if (i % 5 == 0 && i % 3 != 0)
            {
                Console.WriteLine("Buzz");
            }
            else
            {
                Console.WriteLine(i);
            }
        }
    }


    public static Dictionary<string, int> AverageAgeForEachCompany(List<Employee> employees)
    {
        var groupedByCompany = employees.GroupBy(employee => employee.Company);

        Dictionary<string, int> avgAge = groupedByCompany.Select(group => new
        {
            Company = group.Key,
            AverageAge = (int)group.Average(employee => employee.Age)
        }).ToDictionary(kvp => kvp.Company, kvp => kvp.AverageAge);


        return avgAge;

    }

    public static Dictionary<string, int> CountOfEmployeesForEachCompany(List<Employee> employees)
    {

        var groupedByCompany = employees.GroupBy(employee => employee.Company);

        Dictionary<string, int> count = groupedByCompany.Select(group => new
        {
            Company = group.Key,
            Count = group.Count()
        }).ToDictionary(kvp => kvp.Company, kvp => kvp.Count);

        return count;
    }

    public static Dictionary<string, Employee> OldestAgeForEachCompany(List<Employee> employees)
    {

        var groupedByCompany = employees.GroupBy(employee => employee.Company);
        Dictionary<string, Employee> oldest = groupedByCompany.Select(group => new
        {
            Company = group.Key,
            OldestEmployee = group.OrderByDescending(employee => employee.Age).FirstOrDefault()
        }).ToDictionary(kvp => kvp.Company, kvp => kvp.OldestEmployee);

        
        return oldest;
    }


    public static void Main()
    {
        int countOfEmployees = int.Parse(Console.ReadLine());

        var employees = new List<Employee>();

        for (int i = 0; i < countOfEmployees; i++)
        {
            string str = Console.ReadLine();
            string[] strArr = str.Split(' ');
            employees.Add(new Employee
            {
                FirstName = strArr[0],
                LastName = strArr[1],
                Company = strArr[2],
                Age = int.Parse(strArr[3])
            });
        }

        foreach (var emp in AverageAgeForEachCompany(employees))
        {
            Console.WriteLine($"The average age for company {emp.Key} is {emp.Value}");
        }

        foreach (var emp in CountOfEmployeesForEachCompany(employees))
        {
            Console.WriteLine($"The count of employees for company {emp.Key} is {emp.Value}");
        }

        foreach (var emp in OldestAgeForEachCompany(employees))
        {
            Console.WriteLine($"The oldest employee of company {emp.Key} is {emp.Value.FirstName} {emp.Value.LastName} having age {emp.Value.Age}");
        }
    }



    public class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Company { get; set; }
    }
}
