# ng-ds-test
#Angular, Data Structures, and search algos exam

Instructions: create a new repository called ng-ds-test. Within this repo, create a README.md file. Copy and paste all of these questions into this README file and answer them.

1. Name and describe the two main operations of a stack (to add and remove data).
1) To add element use push method(LIFO-> last in first out)
2) To remove element use pop to extract the element

2. Name and describe the two main operations of a queue (to add and remove data).

Queue use FIFO(first in first out)

1) to add element to queue use unshift to be sure that the element you add it's in the begining of the queue
2) and how the first element is the first to out use pop to get the element

3. Draw the tree resulting from adding the following sequence of numbers to an empty tree: 30, 45, 15, 10, 50, 40, 20, 27

------------30---------------
------15----------45---------
---10---20------40----50-----
----------27-----------------


4. Is this tree balanced? If not, which rotation needs to be done? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

is balanced

5. Now add 29. Is the tree balanced? If not, which rotation needs to be done? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

//Answer
------------30---------------
------15----------45---------
---10---20------40----50-----
----------27-----------------
------------29---------------

node 27 -rightRotation(30)



6. Consider the following tree:
  ------5  
  ---2-----8  
  -1--3  
  0---

  Now add 0 to the tree. Which one is the first node to go out of balance?
  5

7. How do you fix this node? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

  5-leftRotation
  3-rigthRotation


8. What are the four main steps of mergesort?

1)If the length of the list is one, it's already ordered
2)Divide the list in 2 parts approximately on half
3)Order the two list recursively using merge order method(taking the less value between two list )
4)merge the list

9. What are the four main steps of quicksort?

1) Choose the pivote number it could be any number on the array
2) i begin searching for the front and the end of the array if the left number is bigger than the pivote stop there.
3)search begining for the end of the array y the number if less than the pivote stop
4)changes value and star again recursively.


10. What is an angular directive?

angular directive is custom html tag

11. When specifying an angular directive, you write a function which must return an object called:  
  a. Directive Constructor  
  b. Fidel y Chavez Object  
  c. Directive Definition object
  d. Directive Object //Answer

12. What is the relationship between html, the $scope construct, and angular expressions? (Expressions are the ones that are written like so: {{quote}} ).

//Answer-> With scope you can save your data, and use angular expression to show your data inside the html.

13. In order to send ajax requests in Angular, the most accepted programming convention is to create an angular:  
  a. Module    
  b. Service  //Answer
  c. Controller  
  d. $http  

14. In order to create a service, you must use the following angular function:  
  a. angularApp.controller  
  b. angularApp.module  
  c. angularApp.directive  
  d. angularApp.factory  //Answer

15. Go to my [angular projects github repo](https://github.com/Swolebrain/ng-starter-projects) and do one of them. Don't clone the repository, but rather add all the files to the folder which corresponds to your github repo. Add the files right at the root of your repo, not within a subfolder. Make sure you upload it to fvi-grad.com and also to a github repository.
