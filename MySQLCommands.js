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
