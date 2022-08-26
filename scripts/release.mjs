try {
  await which('git-cliff')
} catch {
  echo('git-cliff is not installed')
  echo('Visit https://github.com/orhun/git-cliff#installation for installation instructions')
}

let tag = await question('What is the tag of the release?')

await $`git-cliff --tag ${tag} > CHANGELOG.md`
await $`git add ./CHANGELOG.md`
await $`git commit -m 'chore(release): ${tag}'`
await $`git tag ${tag}`

echo('Finished')
echo('Please push changes to upstream.')
