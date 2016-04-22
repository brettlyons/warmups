defmodule Fuzzbizz do
  def fuzzbizz({0, _, _}) do
    "Fizz"
  end

  def fuzzbizz({0, 0, _}) do
    "FizzBuzz"
  end

  def fuzzbizz({_, _, n}) do
    n
  end

  def do_bizzfuzz(n) do
    IO.puts "This -> " ++ fuzzbizz({rem(n,3), rem(n,5), n})
  end
end
