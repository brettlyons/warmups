defmodule Geom do
  @moduledoc """
  Functions for calculating geometric values.

  Practicing elixir etudes.
  """

  @doc """
  Given two values, calculates the area as if they were the length and width of
  a rectangle.
  """

  @spec area(number(), number()) :: number()

  def area(x \\ 1,y \\ 1) do
    x * y
  end
end
