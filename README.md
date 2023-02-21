
# E-commerce web




## Demo

https://wahyunandanovan-ecommerce.vercel.app

## Demo Account
email : wahyunandanovan@gmail.com

password : 12345678


## Tech Stack

**Client:** Vite, React, Material UI

**Server:** Supabase


## Design inspiration
https://www.figma.com/file/aVPzCOkvm4JIOWAgCvQEtr/E-comm-App-Kit-(Community)?t=BPSVtaIXvZ6xJHCK-0

## Installation

Install my-project with npm

```bash
  git clone https://github.com/wahyunandanovan/ecommerce.git
  cd ecommerce
  npm Install
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_SUPABASE_URL : https://yoursupabaseurl.supabase.co`

`VITE_SUPABASE_KEY : exampleabcdefghijklmnopqrtydsgkcyudkgcdskuvcydsvusdvyudvhjduyvciudyaisyvd`


## Example schema


```bash
#product


const product = [
  {
    created_at: "2022-10-17T22:42:25+00:00",
    category_id: "cc196f48-185e-44a0-861a-1834c4e08347",
    starting_price: 290,
    discount: 4,
    name: "Nike Air Max 199",
    images:
      "https://uucminkkoxctdtnlzwmo.supabase.co/storage/v1/object/sign/images/shoes5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc2hvZXM1LnBuZyIsImlhdCI6MTY2NjA0NjQ5OCwiZXhwIjoxOTgxNDA2NDk4fQ.l6opdvTGdkJu7dKvQdDppgdNy0dZ_QtLkIbFqvSCAKY&t=2022-10-17T22%3A41%3A38.907Z",
    description: "any",
    is_best_seller: true,
    colors: [
      {
        name: "red",
        image:
          "https://uucminkkoxctdtnlzwmo.supabase.co/storage/v1/object/sign/images/shoes5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc2hvZXM1LnBuZyIsImlhdCI6MTY2NjA0NjQ5OCwiZXhwIjoxOTgxNDA2NDk4fQ.l6opdvTGdkJu7dKvQdDppgdNy0dZ_QtLkIbFqvSCAKY&t=2022-10-17T22%3A41%3A38.907Z",
      },
      {
        name: "white",
        image:
          "https://uucminkkoxctdtnlzwmo.supabase.co/storage/v1/object/sign/images/shoes5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc2hvZXM1LnBuZyIsImlhdCI6MTY2NjA0NjQ5OCwiZXhwIjoxOTgxNDA2NDk4fQ.l6opdvTGdkJu7dKvQdDppgdNy0dZ_QtLkIbFqvSCAKY&t=2022-10-17T22%3A41%3A38.907Z",
      },
      {
        name: "blue",
        image:
          "https://uucminkkoxctdtnlzwmo.supabase.co/storage/v1/object/sign/images/shoes5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc2hvZXM1LnBuZyIsImlhdCI6MTY2NjA0NjQ5OCwiZXhwIjoxOTgxNDA2NDk4fQ.l6opdvTGdkJu7dKvQdDppgdNy0dZ_QtLkIbFqvSCAKY&t=2022-10-17T22%3A41%3A38.907Z",
      },
      {
        name: "black",
        image:
          "https://uucminkkoxctdtnlzwmo.supabase.co/storage/v1/object/sign/images/shoes5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc2hvZXM1LnBuZyIsImlhdCI6MTY2NjA0NjQ5OCwiZXhwIjoxOTgxNDA2NDk4fQ.l6opdvTGdkJu7dKvQdDppgdNy0dZ_QtLkIbFqvSCAKY&t=2022-10-17T22%3A41%3A38.907Z",
      },
      {
        name: "yellow",
        image:
          "https://uucminkkoxctdtnlzwmo.supabase.co/storage/v1/object/sign/images/shoes5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc2hvZXM1LnBuZyIsImlhdCI6MTY2NjA0NjQ5OCwiZXhwIjoxOTgxNDA2NDk4fQ.l6opdvTGdkJu7dKvQdDppgdNy0dZ_QtLkIbFqvSCAKY&t=2022-10-17T22%3A41%3A38.907Z",
      },
    ],
    id: "35d130fc-eb8d-42e7-a9f4-f764e4171bc1",
    price: 278.4,
    rating: 5,
    sizes: [38, 39, 40, 41, 42, 43, 44],
  },
];
```

