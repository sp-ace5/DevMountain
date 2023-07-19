--Site was down so I could not test these queries

--Get all invoices where the unit_price on the invoice_line is greater than $0.99.

    `
    SELECT 
        * 
    FROM 
        invoice 
    WHERE 
        invoice_id = (
    SELECT 
        invoice_id 
    FROM 
        invoice_line 
    WHERE 
        unit_price > 0.99;
    )`
--Get all playlist tracks where the playlist name is Music.

--Get all track names for playlist_id 5.

--Get all tracks where the genre is Comedy.
    `
    SELECT
        *
    FROM
        track
    WHERE
        genre_id = (
    SELECT
        genre_id
    FROM
        genre
    WHERE
        name = 'Comedy'
    )
    `
--Get all tracks where the album is Fireball.

--Get all tracks for the artist Queen ( 2 nested subqueries ).
