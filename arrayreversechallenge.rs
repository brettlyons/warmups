use std::io;

fn main() {
    let reader = io::stdin();
    let mut quantity = String::new();

    reader.read_line(&mut quantity).unwrap();

    let mut tmp_numbers = String::new();
    reader.read_line(&mut tmp_numbers);

    let mut numbers: Vec<i32> = tmp_numbers.split_whitespace()
        .map(|s| s.parse().unwrap())
        .collect();

    numbers.reverse();

    for i in numbers {
        print!("{} ", &i);
    }
}
