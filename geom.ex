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

  defp area(shape, x, y) when x > 0 and y > 0 do
    case shape do
      :rectangle -> x * y
      :triangle -> x * y / 2.0
      :ellipse -> :math.pi * x * y
    end
  end


  defp area(_, _, _) do # should let it fail... but aren't.
    0
  end
end
