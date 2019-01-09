module HotShots.StatsD
       ( StatsdClient
       , increment
       , gauge
       , createStatsdClient
       , timing
       ) where

import Data.Unit (Unit)
import Effect (Effect)

foreign import data StatsdClient :: Type

foreign import createStatsdClient
  :: String -> Int -> Effect StatsdClient

foreign import increment
  :: StatsdClient -> String -> Effect Unit

foreign import gauge
  :: StatsdClient -> String -> Number -> Effect Unit

foreign import timing
  :: StatsdClient -> String -> Int -> Effect Unit
