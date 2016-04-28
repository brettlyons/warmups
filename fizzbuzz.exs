defmodule FizzbuzzModule do
  @moduledoc """
  FizzBizz as suggested by Dave Thomas in his book "Programming Elixir"
  using pattern matching, no conditionals.
  """

  def fizzbuzz(0, 0, _) do
    "FizzBuzz"
  end

  def fizzbuzz(0, _, _) do
    "Fizz"
  end

  def fizzbuzz(_, 0, _) do
    "Buzz"
  end

  def fizzbuzz(_, _, n) do
    n
  end

  def do_fizzbuzz(_, 0) do # end on 0
    IO.puts(" THE END ")
  end

  def do_fizzbuzz(n, ending) do
    IO.puts(fizzbuzz(rem(n,3), rem(n,5), n))
    do_fizzbuzz(n+1, ending-1)
  end

  def do_fizzbuzz() do # this is starting place.
    do_fizzbuzz(1, 100)
  end
end
