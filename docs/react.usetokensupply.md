<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/react](./react.md) &gt; [useTokenSupply](./react.usetokensupply.md)

## useTokenSupply() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Use this to get a the total supply of your Token contract.

<b>Signature:</b>

```typescript
export declare function useTokenSupply(contract: RequiredParam<Erc20>): import("react-query").UseQueryResult<{
    symbol: string;
    name: string;
    value: import("ethers").BigNumber;
    decimals: number;
    displayValue: string;
}, unknown>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  contract | [RequiredParam](./react.requiredparam.md)<!-- -->&lt;Erc20&gt; | an instace of a Token contract. |

<b>Returns:</b>

import("react-query").UseQueryResult&lt;{ symbol: string; name: string; value: import("ethers").BigNumber; decimals: number; displayValue: string; }, unknown&gt;

a response object that incudes the total minted supply

## Example


```javascript
const { data: totalSupply, isLoading, error } = useTokenSupply(<YourTokenContractInstance>);
```
