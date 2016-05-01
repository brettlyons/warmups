defmodule FizzbuzzModule do
  @moduledoc """
  FizzBizz as suggested by Dave Thomas in his book "Programming Elixir"
  using pattern matching, no conditionals.
  """

  #fizzbuzz_two = fn 0, 0, _ -> "FizzBuzz"
  #0, _, _ -> "Fizz"
  #_, 0, _ -> "Buzz"
  #_, _, n -> n
  #end
  # doesn't quite work -- maybe poor fn description?

  def fizzbuzz(0, 0, _), do: "FizzBuzz"
  def fizzbuzz(0, _, _), do: "Fizz"
  def fizzbuzz(_, 0, _), do: "Buzz"
  def fizzbuzz(_, _, n), do: n

  def do_fizzbuzz(_, 0) do # end on 0
    IO.puts(" THE END ")
  end

  def do_fizzbuzz(n, ending) do
    IO.puts(fizzbuzz(rem(n,3), rem(n,5), n))
    #IO.puts(fizzbuzz_two(rem(n,3), rem(n,5), n))
    do_fizzbuzz(n+1, ending-1)
  end

  def do_fizzbuzz(ending) do # if given 1 val, use it as ending
    do_fizzbuzz(1, ending)
  end

  def do_fizzbuzz() do # start at 1 if called without vals.
    do_fizzbuzz(1, 100)
  end
end
