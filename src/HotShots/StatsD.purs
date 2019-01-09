module HotShots.StatsD
       ( increment
       , gauge
       , timing
       ) where

import Data.Unit (Unit)
import Effect (Effect)

foreign import increment
  :: String -> Int -> String -> Effect Unit

foreign import gauge
  :: String -> Int -> String -> Number -> Effect Unit

foreign import timing
  :: String -> Int -> String -> Int -> Effect Unit
