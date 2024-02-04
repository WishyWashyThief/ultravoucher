SELECT table1.id, table1.name, table2.name AS parent_name FROM main_table AS table1
JOIN table2 AS main_table ON table1.id = table2.id