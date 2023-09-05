import prompts from 'prompts'

const qa = async (text: string) => {
  const res = await prompts({
    type: 'text',
    name: 'anser',
    message: text,
  })
  switch (res.anser) {
    case 'y':
    case 'Y':
    case 'yes':
    case 'YES':
      return true
    default:
      console.info('処理はキャンセルされました')
      process.exit(1)
      break
  }
}

const main = async () => {
  try {
    await qa('本アップします。git-flowは忘れてませんか? [y/N]')
    await qa('本当にgit-flowしましたか? [y/N]')
    console.info('処理を開始します')
    return true
  } catch (error) {
    console.error('不明なエラー')
    process.exit(1)
  }
}

main()
