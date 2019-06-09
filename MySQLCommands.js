/* SQL STATEMENT FUNDAMENTALS */
/* SELECT Statement */
SELECT first_name, last_name, email 
FROM customer;

/* SELECT DISTINCT */
SELECT DISTINCT rating
FROM film;

/*SELECT WHERE */
SELECT last_name, first_name
FROM customer
where first_name='Jamie';

SELECT last_name, first_name
FROM customer
where first_name='Jamie' AND last_name='Rice';

SELECT customer_id, amount, payment_date
FROM payment
where amount <= 1 OR amount >= 8;

SELECT amount, payment_date
FROM payment
WHERE amount != 4.99;

SELECT amount, payment_date
FROM payment
WHERE amount = 4.99 AND amount = 1.99;

SELECT * 
FROM customer
WHERE store_id = 1 AND address_id > 5;

SELECT *
FROM customer
WHERE store_id = 1 OR store_id = 2;

SELECT phone
FROM address
WHERE address='259 Ipoh Drive';

/* ORDER BY */
SELECT first_name, last_name
FROM customer
ORDER BY last_name DESC;


SELECT first_name, last_name
FROM customer
ORDER BY last_name ASC;

SELECT first_name, last_name
FROM customer
ORDER BY last_name;

SELECT customer_id, amount
FROM payment
ORDER BY amount DESC
LIMIT 10;


SELECT film_id, title
FROM film
ORDER BY film_id
LIMIT 5;

/* BETWEEN
Use BETWEEN operator
To match a value against a range of values

For example:
value BETWEEN low AND high
*/

/* NOT BETWEEN
Use NOT BETWEEN operator
To match a value below or greater than a range of values

For example:
value NOT BETWEEN low OR high;
*/
SELECT amount, payment_date
FROM payment
WHERE payment_date BETWEEN '2007-02-07' AND '2007-02-15'
ORDER BY amount
LIMIT 10;

/* IN 
Used with WHERE clause
To check if a value matches any value in a list of values
*/
/* IN SYNTAX 
value IN (value1, value2, ...)
*/
SELECT customer_id, rental_id, return_date
FROM rental
WHERE customer_id IN (1, 2)
ORDER BY return_date DESC;

SELECT customer_id, rental_id, return_date
FROM rental
WHERE customer_id NOT IN (1, 2)
ORDER BY return_date DESC;

SELECT first_name, last_name
FROM customer
WHERE first_name LIKE 'Jen_';

SELECT first_name, last_name
FROM customer
WHERE first_name LIKE 'Jen%';

SELECT first_name, last_name
FROM customer
WHERE first_name LIKE '%y'
ORDER BY first_name;

SELECT first_name, last_name
FROM customer
WHERE first_name LIKE '%er%'
ORDER BY first_name;

SELECT first_name, last_name
FROM customer
WHERE first_name ILIKE 'BaR%'
ORDER BY first_name;

/* GENERAL CHALLENGE 1 */
SELECT COUNT(amount)
FROM payment
WHERE amount > 5.00;

SELECT COUNT(*)
FROM actor
WHERE first_name LIKE 'P%';

SELECT COUNT(DISTINCT(district))
FROM address;

SELECT DISTINCT(district)
FROM address;

SELECT COUNT(*)
FROM film
WHERE rating = 'R'
AND replacement_cost BETWEEN 5 and 15;

SELECT COUNT(*)
FROM film
WHERE title ILIKE '%Truman%';





/* GROUP BY STATEMENTS */
/* MIN MAX SUM AVG COUNT ROUND AGGREGATE FUNCTIONS */
SELECT AVG(amount)
FROM payment;

/* REDUCING TO 2 DECIMALS */
SELECT ROUND(AVG(amount),2)
FROM payment;

SELECT ROUND(AVG(amount), 2)
FROM payment;

/* MIN */
SELECT MIN(amount)
FROM payment;

/* MAX */
SELECT MAX(amount)
FROM payment;

/* SUM */
SELECT SUM(amount)
FROM payment;

/* COUNT */
SELECT COUNT(amount)
FROM payment
WHERE amount=0.00;





/* GROUP BY SYNTAX */

SELECT column_1, aggregate_function(column_2)
FROM table_name
GROUP BY column_1;

// ACTS LIKE A DISTINCT CLAUSE
// GROUP ALL RESULTS BY CUSTOMER ID INTO A SINGLE COLUMN FOR CUSTOMER ID COLUMN
SELECT customer_id
FROM payment
GROUP BY customer_id;

// GROUP BY clause sorts result set by customer id 
// and adds up amount that belongs to same customer
// whenever customer_id changes, it adds a row to return results set
SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id;

// ORDER BY clause sorts what customers spent the most money or done the most payments
SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id
ORDER BY SUM(amount) DESC;

// USING COUNT AGGREGATE FUNCTION
SELECT staff_id, COUNT(payment_id) // OR COUNT(*)
FROM payment
GROUP BY staff_id;

SELECT rating, COUNT(rating)
FROM film
GROUP BY rating;

SELECT rental_duration, COUNT(rental_duration)
FROM film
GROUP BY rental_duration;

SELECT rating, AVG(rental_rate)
FROM film
GROUP BY rating;

SELECT rating, ROUND(AVG(rental_rate), 2)
FROM film
GROUP BY rating;

/* GROUP BY CHALLENGE */
/* 
How many payments did each staff member handle?
How much was the total amount processed by each staff member?
*/
SELECT staff_id, COUNT(amount), SUM(amount)
FROM payment
GROUP BY staff_id;

/*
They want to know average replacement cost of all movies by rating.
*/
SELECT rating, ROUND(AVG(replacement_cost), 2)
FROM film 
GROUP BY rating;

/*
We want to send coupons to the 5 customers who have spent the most amount of money
Get the customer ids of the top 5 spenders
*/
SELECT customer_id, ROUND(SUM(amount), 2)
FROM payment
GROUP BY customer_id
ORDER BY SUM(amount) DESC
LIMIT 5;




/* HAVING CLAUSE 
Often use HAVING clause in conjunction with GROUP BY clause
To filter group rows that do not satisfy a specified condition

It is similar to the WHERE clause except HAVING clause is used with GROUP BY

HAVING clause sets the condition for group rows created by GROUP BY clause AFTER the GROUP BY clause applies
WHERE clause sets the condtion for individual rows BEFORE GROUP BY clause applies
*/

/* HAVING SYNTAX */
SELECT column_1, aggregate_function(column_2)
FROM table_name
GROUP BY column_1
HAVING condition;

SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id
HAVING SUM(amount) > 200;

SELECT store_id, COUNT(customer_id)
FROM customer
GROUP BY store_id
HAVING COUNT(customer_id) > 300;

SELECT rating, AVG(rental_rate)
FROM film
WHERE rating IN ('R', 'G', 'PG')
GROUP BY rating;

SELECT rating, AVG(rental_rate)
FROM film
WHERE rating IN ('R', 'G', 'PG')
GROUP BY rating
HAVING AVG(rental_rate) < 3;

/* HAVING CHALLENGES */
/* 
The requirements are the customer has at least a total of 40 transaction payments
What customers (by customer_id) are eligible for the credit card?
*/

SELECT customer_id, COUNT(amount) 
FROM payment 
GROUP BY customer_id 
HAVING COUNT(amount) >= 40;

/*
When grouped by rating, what movie ratings
have an average rental duration of more than 5 days?
*/

SELECT rating, ROUND(AVG(rental_duration), 2) 
FROM film
GROUP BY rating
HAVING AVG(rental_duration) > 5;


/* ASSESSMENT 1 TEST */
/*
Return the customer IDs of customers who have spent at least $110
with the staff member who has an ID of 2.

The answer should be customers 187 and 148.
*/
SELECT customer_id, SUM(amount)
FROM payment
WHERE staff_id = 2
GROUP BY customer_id
HAVING SUM(amount) >= 110;


/*
How many films begin with the letter j?
The answer should be 20.
*/
SELECT COUNT(*)
FROM film
WHERE title LIKE 'J%';

/*
What customer has the highest customer ID number 
whose name starts with an 'E' 
and has an address ID lower than 500?

The answer should be Eddie Tomlin
*/
SELECT first_name, last_name
FROM customer
WHERE first_name ILIKE 'E%' AND address_id < 500
ORDER BY customer_id DESC
LIMIT 1;









/* JOINS SECTION */

/* AS STATEMENT 
Allows to rename columns or table selections with an alias
*/
SELECT payment_id AS my_payments_column 
FROM payment;

SELECT customer_id, SUM(amount) AS total_spent
FROM payment
GROUP BY customer_id;

/* INNER JOIN STATEMENT
Relating data in one data to the data in other tables
INNER JOIN clause returns rows in A table that have corresponding rows in B table
INNER JOIN is DEFAULT for JOIN statement
*/

/* INNER JOIN SYNTAX */
SELECT A.pka, A.c1, B.pkb, B.c2 // specify columns in both tables which you want to select data in SELECT clause
FROM A // specify main table in FROM clause
INNER JOIN B ON A.pka = B.fka; // specify table that main table joins to in INNER JOIN clause, put a join condition after the ON keyword

/* 
For each row in A table, PostgreSQL scans the B table to check if there is any row that matches the condition A.pka = B.fka
If it finds a match, it combines columns of both rows into one row
and adds the combined row to the returned result set
*/
// A: customer table
// B: payment table
SELECT 
customer.customer_id, // only have to specify customer table once because other columns are unique to customer table
first_name, 
last_name, 
email, 
amount, 
payment_date
FROM customer
INNER JOIN payment ON payment.customer_id = customer.customer_id
// ORDER BY customer.customer_id; // need to specify which table to take column name from
// WHERE customer.customer_id = 2;
WHERE customer.first_name LIKE 'A%';


SELECT payment_id, amount, first_name, last_name
FROM payment
INNER JOIN staff ON payment.staff_id = staff.staff_id;


SELECT store_id, title 
FROM inventory
INNER JOIN film
ON inventory.film_id = film.film_id;

// how many copies of each movie are at store_id = 1?
SELECT title, COUNT(title) AS copies_at_store1
FROM inventory
INNER JOIN film
ON inventory.film_id = film.film_id
WHERE store_id = 1
GROUP BY title
ORDER BY title;

// A: film table
// B: language table
SELECT title, name movie_language
FROM film
INNER JOIN language lan ON lan.language_id = film.language_id;






/* OVERVIEW OF JOIN TYPES */
/* INNER JOIN SYNTAX */
SELECT * FROM TableA // specify columns in both tables which you want to select data in SELECT clause
INNER JOIN TableB // specify main table in FROM clause
ON TableA.name = TableB.name; // specify table that main table joins to in INNER JOIN clause, put a join condition after the ON keyword

/* FULL OUTER JOIN
Produces the set of all records in Table 1 and Table 2
with matching records from both sides where available.
If there is no match, the missing side will contain null.
*/
SELECT * FROM TableA
FULL OUTER JOIN TableB
ON TableA.name = TableB.name;

/* FULL OUTER JOIN with WHERE CLAUSE
Produce a set of records unique to Table 1 and Table 2,
Perform full outer join, then
exclude the records we don't want from both sides using a WHERE clause
*/
SELECT * FROM TableA
FULL OUTER JOIN TableB
ON TableA.name = TableB.name
WHERE TableA.id IS null
OR TableB.id IS null;

/* LEFT OUTER JOIN
Products a set of records from Table 1
with the matching records (where available) in Table 2.
If there is no match, the right side will contain null.
*/
SELECT * FROM TableA
LEFT OUTER JOIN TableB
ON TableA.name = TableB.name;

/* LEFT OUTER JOIN with WHERE clause
To produce a set of records only in Table 1, but not in Table 2
Perform LEFT OUTER JOIN
Then exclude the records we don't want from the right side using a WHERE clause
*/
SELECT * FROM TableA
LEFT OUTER JOIN TableB
ON TableA.name = TableB.name
WHERE TableB.id IS null;

/* RIGHT OUTER JOIN
Products a set of records from Table 2
with the matching records (where available) in Table 1.
If there is no match, the left side will contain null.
*/
SELECT * FROM TableB
LEFT OUTER JOIN TableA
ON TableB.name = TableA.name;

/* RIGHT OUTER JOIN with WHERE clause
To produce a set of records only in Table 2, but not in Table 1
Perform RIGHT OUTER JOIN
Then exclude the records we don't want from the left side using a WHERE clause
*/
SELECT * FROM TableB
RIGHT OUTER JOIN TableA
ON TableB.name = TableA.name
WHERE TableA.id IS null;




/* EXAMPLE OF LEFT OUTER JOIN */
SELECT film.film_id, film.title, inventory.inventory_id
FROM film
LEFT OUTER JOIN inventory 
ON inventory.film_id = film.film_id
WHERE inventory.film_id IS NULL
ORDER BY film.film_id;

SELECT film.film_id, film.title, inventory.inventory_id
FROM film
LEFT OUTER JOIN inventory 
ON inventory.film_id = film.film_id
WHERE inventory_id IS NULL
ORDER BY film.title;






/* UNION 
UNION operator combines result sets of two or more SELECT statements into a single result set
**** RULES ****
Both queries must return the same number of columns.
Corresponding columns in queries must have compatible data types.
*/
SELECT column_1, column_2
FROM tbl_name_1
UNION
SELECT column_1, column_2
FROM tbl_name_2;

/* UNION USES
UNION operator removes all duplicate rows unless the UNION ALL is used
UNION operator may place rows in the first query before, after, or between the rows in the result set of second query
To sort the rows in combined result set by a specific column, use ORDER BY clause

UNION operator is used to combine data from similar tables that are not perfectly normalized
*/
SELECT * FROM sales2007q1
UNION
SELECT * FROM sales2007q2

SELECT * FROM sales2007q1
UNION ALL // adds duplicate rows into result set
SELECT * FROM sales2007q2







/* ADVANCED SQL COMMANDS */
/* TIMESTAMPS AND EXTRACT 
PostgreSQL extract function extracts parts from a date
Extract many types of time-based information
*/
/* EXTRACT SYNTAX */
extract(unit from date) 

SELECT extract(day from payment_date) // extract and 'day' are lower case to not confuse SQL to use another table
FROM payment;

SELECT customer_id, extract(day from payment_date) AS day
FROM payment;

// How much did I get in payment from highest grossing month?
SELECT SUM(amount) AS total, extract(month from payment_date) AS month
FROM payment
GROUP BY month
ORDER BY total DESC
LIMIT 1;



/* MATH FUNCTIONS */
SELECT customer_id + rental_id AS new_id FROM payment;
SELECT customer_id * rental_id AS new_id FROM payment;
SELECT customer_id - rental_id AS new_id FROM payment;
SELECT customer_id / rental_id AS new_id FROM payment;
SELECT round(AVG(amount), 2) FROM payment;



/* SUBQUERY 
A subquery is a query nested inside another query
Constructing a subquery:
    Put second query in brackets and use it in WHERE clause as an expression
*/
/*
We want to find the films whose rental rate is higher than the average rental rate.
*/
// Find the average rental rate by using SELECT and AVG
SELECT AVG(rental_rate)
FROM film;
// Use result of first query in the second SELECT statement to find the films that we want
SELECT title, AVG(rental_rate)
FROM film
WHERE rental_rate > 2.98;

/* SUBQUERY EXAMPLE */
SELECT film_id, title, rental_rate
FROM film
WHERE rental_rate > (SELECT AVG(rental_rate) FROM film);

SELECT film_id, title
FROM film
WHERE film_id IN (SELECT inventory.film_id
FROM rental
INNER JOIN inventory ON inventory.inventory_id = rental.inventory_id
WHERE return_date BETWEEN '2005-05-29' AND '2005-05-30');



/* SELF JOIN 
Use SELF JOIN when you want to combine rows with other rows in same table
To perform SELF JOIN operation, use a table alias to help SQL distinguish the left table from right table of the same table
*/

/* We want to find out which employees are from the same location as the employee named Joe */
// SUBQUERY EXAMPLE
SELECT employee_name FROM employee
WHERE employee_location IN 
(SELECT employee_location FROM employee
WHERE employee_name = 'Joe');

// SELF JOIN EXAMPLE
SELECT e1.employee_name
FROM employee AS e1, employee AS e2
WHERE e1.employee_location = e2.employee_location
AND e2.employee_name = 'Joe';


SELECT a.customer_id, a.first_name, a.last_name, b.customer_id, b.first_name, b.last_name
FROM customer AS a, customer AS b
WHERE a.first_name = b.last_name;

SELECT a.customer_id, a.first_name, a.last_name, b.customer_id, b.first_name, b.last_name
FROM customer AS a
LEFT OUTER JOIN customer AS b ON a.first_name = b.last_name // LEFT JOIN === LEFT OUTER JOIN, JOIN DEFAULTS TO INNER JOIN
ORDER BY a.customer_id;






/* ASSESSMENT 2 */
// How can you retrieve all the information from the cd.facilities table?
SELECT * FROM cd.facilities;

// You want to print out a list of all of the facilities and their cost to members.
// How would you retrieve a list of only facility names and costs?
SELECT name, membercost FROM cd.facilities;

// How can you produce a list of facilities that charge a fee to members?
SELECT * FROM cd.facilities 
WHERE membercost > 0;

// How can you produce a list of facilities that charge a fee to members,
// and that fee is less than 1/50th of the monthly maintenance cost?
// Return the facid, facility name, member cost, and monthly maintenance 
// of the facilities in question.
SELECT facid, name, membercost, monthlymaintenance
FROM cd.facilities
WHERE membercost > 0 
AND (membercost < monthlymaintenance/50.0)


// How can you produce a list of all facilities with the word 'Tennis' in their name?
SELECT *
FROM cd.facilities
WHERE name ILIKE '%Tennis%';

// How can you retrieve the details of facilities with ID 1 and 5? 
// Try to do it without using the OR operator.
SELECT *
FROM cd.facilities
WHERE facid in (1, 5);

// How can you produce a list of members who joined after the start of September 2012?
// Return the memid, surname, firstname, and joindate of the members in question.
SELECT memid, surname, firstname, joindate
FROM cd.members
WHERE joindate >= '2012-09-01';