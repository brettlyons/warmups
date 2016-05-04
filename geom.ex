defmodule Geom do
  @moduledoc """
  Functions for calculating geometric values.

  Practicing elixir etudes.
  """

  @doc """
  Given two values, calculates the area as if they were the length and width of
  a <atom> where atom is either :rectangle, :triangle, or :ellipse.
  """

  # @spec area(atom(), number(), number()) :: number()
  @spec area({atom(), number(), number()}) :: number()
  def area({shape, width, height}) do
    area(shape, width, height)
  end

  defp area(:rectangle, x, y) when x > 0 and y > 0 do
    x * y
  end

  defp area(:triangle, x, y) when x > 0 and y > 0 do
    x * y / 2.0
  end

  defp area(:ellipse, x, y) when x > 0 and y > 0 do
    :math.pi * x * y
  end

  defp area(_, _, _) do # should let it fail... but aren't.
    0
  end
end
