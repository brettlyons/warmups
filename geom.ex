defmodule Geom do
  @moduledoc """
  Functions for calculating geometric values.

  Practicing elixir etudes.
  """

  @doc """
  Given two values, calculates the area as if they were the length and width of
  a <atom> where atom is either :rectangle, :triangle, or :ellipse.
  """

  @spec area(atom(), number(), number()) :: number()

  def area(:rectangle, x, y) when x > 0 and y > 0 do
    x * y
  end

  def area(:triangle, x, y) when x > 0 and y > 0 do
    x * y / 2.0
  end

  def area(:ellipse, x, y) when x > 0 and y > 0 do
    :math.pi * x * y
  end

  def area(_, x, y) do # should let it fail...
    0
  end
end
