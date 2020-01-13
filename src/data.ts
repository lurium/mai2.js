import { BigNumber } from 'bignumber.js'
import { ethers } from 'ethers'

import { ChainIdOrProvider, _ChainIdAndProvider, GovParams, AccountStorage, AccountComputed, FundingParams, FundingResult, PerpetualStorage } from "./types"
import { SUPPORTED_CHAIN_ID, PERPETUAL_ABI, _0, _1, SIDE, FUNDING_TIME } from './constants'
import { normalizeBigNumberish, getContract } from "./utils"


export async function getPerpetualContract(address: string, chainIdOrProvider: ChainIdOrProvider = SUPPORTED_CHAIN_ID.Mainnet): Promise<ethers.Contract> {
  return getContract(address, PERPETUAL_ABI, chainIdOrProvider)
}

export async function getGovParams(perpetualContract: ethers.Contract): Promise<GovParams> {
  const placeholder: ethers.utils.BigNumber = await perpetualContract.placeholder()

  const p = normalizeBigNumberish(placeholder)
  return {
    withdrawalLockBlockCount: p,
    brokerLockBlockCount: p,
    intialMargin: p,
    maintenanceMargin: p,
    liquidationSafetyFactor: p,
    liquidationPenaltyRate: p,
    penaltyFundRate: p,
    makerFeeRate: p,
    takerFeeRate: p,
    oracleAddress: "",
    markPremiumLimit: p,
    fundingDampener: p,
    minPoolSize: p,
    poolFeePercent: p,
    fairPriceAmount: p,
    fairPriceMaxGap: p,
    emaAlpha: p,
    updatePremiumPrize: p,
  }
}
/*
export async function getPerpetualStorage(perpetualContract: ethers.Contract): Promise<PerpetualStorage> {
  const placeholder: ethers.utils.BigNumber = await perpetualContract.placeholder()

  const p = normalizeBigNumberish(placeholder)
  //return {}
}


export async function getAccountStroage(perpetualContract: ethers.Contract, address: string): Promise<AccountStorage> {

}
*/
