# Prismic & Gatsby.js Quick Start

## Step 1 
Install node on your machine from here https://nodejs.org/en/

## Step 2
Clone this repository into a folder of choice
```
git clone https://github.com/nbumbu/chsb-metrics.git
```

## Step 3
Use yarn (https://classic.yarnpkg.com/en/docs/install/) or npm to install all dependencies
```
yarn 
```
or
```
npm install
```

### Step 4
Start the develoment
```
gatsby develop
```

***

# Page markdown

The markdown and assets required for building the page is coming from the CMS (Prismic) and it's organized in slices (sections). 
It can be queried through Gatsby's GraphiQL data layer api (https://www.gatsbyjs.com/docs/graphql/).
The api can be accesed by typing http://localhost:8000/___graphql in the browser:

![Gatsby GrapiQl example!](src/images/gatsbyGraphiQl.png)


# API data

The data required for the page can be fetched from the following api root:
```
https://chsb-metrics-api.nbumbu.workers.dev/
```
The data required for the chsb chart can be fetched from the following api ends:
```
/chsb-price-month
```
E.g. Request:
```
GET https://chsb-metrics-api.nbumbu.workers.dev/chsb-price-month
```
E.g. Response: 
```
[
    {
        "price": 0.00935,
        "time": "2019-06-16T00:00:00.000Z"
    },
    {
        "price": 0.008741,
        "time": "2019-06-17T00:00:00.000Z"
    },
    {
        "price": 0.008509,
        "time": "2019-06-18T00:00:00.000Z"
    }
]
```

The rest of the data can be found at the following api end:
```
/chsb-metrics
```
E.g. Request:
```
GET https://chsb-metrics-api.nbumbu.workers.dev/chsb-metrics    
```
E.g. Response: 
```
{
    "chsbCirculatingSupplyTokens": 227885076,
    "chsbStackedTokens": 139665000,
    "chsbStackedPercentage": 19.83,
    "chsbYieldPledgedTokens": 331754774,
    "chsbInYieldPercentage": 47.11,
    "chsbBurnedTokens": 4898917.07,
    "totalSupplyBurnedPercentage": 0.6956675457607038
}
```

## Requirements & guidelines
Please put the solution in a separate code repository.

Please use TypeScript as the main language. The choice of UI library is up to you.

The API can be fetched both at build time or from the client side.

Tests are not required, although please write the code with testing & future development in mind.

If the data is not present in CMS, you can hard-code it directly in the component.



## Learn more about using Prismic with Gatsby.js
> [Prismic + Gatsby.js Documentation](https://prismic.io/docs/technologies/gatsby)
