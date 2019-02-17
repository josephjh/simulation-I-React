insert into products (product_name, img_url, price)
values ($1, $2, $3)
returning id, product_name, img_url, price