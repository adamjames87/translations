<script>
  import { onMount } from 'svelte'
  export let name
  export let message

  let serverDate = null
  onMount(async () => {
    let data = await (await fetch('/api')).json()
    message = data.msg
    console.log('MESSAGE: ', message)
    let dateData = await(await fetch('/api/date')).json()
    serverDate = dateData.date
  })
</script>

<main>
  <h1>Hello {name}!</h1>
  <h2>{message}</h2>
  <h2>{serverDate}</h2>
  <h3>Test the CI process. Make a manual change.</h3>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
