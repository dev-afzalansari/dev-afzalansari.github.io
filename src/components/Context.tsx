import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react'

// const THEME_COLORS = {
//   bluePrime: '#84beff',
//   grayText: "#393e46",
//   grayTitle: "#283739",
//   whiteTitle: "#f8f8f8",
//   whiteText: "#e0e0e0"
// }

const Ctx = createContext(
  {} as {
    toggleTheme: () => void
    theme: string
  }
)
// eslint-disable-next-line
export const useCtx = () => useContext(Ctx)

export default function Context({ children }: { children: ReactElement }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <Ctx.Provider value={{ toggleTheme, theme }}>
      <div
        id="main-wrapper"
        className="h-screen w-screen flex justify-center font-inter bg-white-background dark:bg-black-background"
      >
        <div
          id="container"
          className="max-w-3xl w-[768px] min-w-[200px] h-full flex flex-col"
        >
          {children}
        </div>
      </div>
    </Ctx.Provider>
  )
}

const useTheme = () => {
  const themeKey = 'the_theme'

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(themeKey) || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem(themeKey, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return {
    theme,
    toggleTheme
  }
}
