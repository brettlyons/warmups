defmodule FizzbuzzModule do
  @moduledoc """
  FizzBizz as suggested by Dave Thomas in his book "Programming Elixir"
  using pattern matching and not conditionals.
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

  def do_fizzbuzz(_, 0) do
    IO.puts(" THE END ")
  end

  def do_fizzbuzz(n, ending) do
    IO.puts(fizzbuzz(rem(n,3), rem(n,5), n))
    do_fizzbuzz(n+1, ending-1) # end on 0
  end

  def do_fizzbuzz() do
    do_fizzbuzz(1, 100)
  end

  def start_fizzbuzz() do
    do_fizzbuzz()
  end
end
