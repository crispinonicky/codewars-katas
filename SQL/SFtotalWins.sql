select name, sum(won) as won, sum(lost) as lost from fighters
join winning_moves on fighters.move_id = winning_moves.id 
where move not in ('Hadoken', 'Shouoken','Kikoken')
    group by name
    order by 2 desc
    limit 6

    