export function AyushMark(props: React.ComponentProps<"svg">) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   viewBox="0 0 512 256"
    //   aria-hidden
    //   {...props}
    // >
    //   <path
    //     fill="currentColor"
    //     d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64Z"
    //   />
    // </svg>
    <svg
      {...props}
      aria-hidden
      viewBox="0 0 450 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 50H50V100H0V50Z" fill="currentColor" />
      <path d="M250 50H300V100H250V50Z" fill="currentColor" />
      <path d="M150 100H200V150H150V100Z" fill="currentColor" />
      <path d="M400 100H450V150H400V100Z" fill="#FF0000" />
      <path d="M50 100H100V150H50V100Z" fill="currentColor" />
      <path d="M100 100H150V150H100V100Z" fill="currentColor" />
      <path d="M150 150H200V200H150V150Z" fill="currentColor" />
      <path d="M350 150H400V200H350V150Z" fill="currentColor" />
      <path d="M300 150H350V200H300V150Z" fill="currentColor" />
      <path d="M150 50H200V100H150V50Z" fill="currentColor" />
      <path d="M0 150H50V200H0V150Z" fill="currentColor" />
      <path d="M50 0H100V50H50V0Z" fill="currentColor" />
      <path d="M0 100H50V150H0V100Z" fill="currentColor" />
      <path d="M300 0H350V50H300V0Z" fill="currentColor" />
      <path d="M250 100H300V150H250V100Z" fill="currentColor" />
      <path d="M100 0H150V50H100V0Z" fill="currentColor" />
      <path d="M350 0H400V50H350V0Z" fill="currentColor" />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `
  <svg viewBox="0 0 450 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 50H50V100H0V50Z" fill="${color}" />
      <path d="M250 50H300V100H250V50Z" fill="${color}" />
      <path d="M150 100H200V150H150V100Z" fill="${color}" />
      <path d="M400 100H450V150H400V100Z" fill="#FF0000" />
      <path d="M50 100H100V150H50V100Z" fill="${color}" />
      <path d="M100 100H150V150H100V100Z" fill="${color}" />
      <path d="M150 150H200V200H150V150Z" fill="${color}" />
      <path d="M350 150H400V200H350V150Z" fill="${color}" />
      <path d="M300 150H350V200H300V150Z" fill="${color}" />
      <path d="M150 50H200V100H150V50Z" fill="${color}" />
      <path d="M0 150H50V200H0V150Z" fill="${color}" />
      <path d="M50 0H100V50H50V0Z" fill="${color}" />
      <path d="M0 100H50V150H0V100Z" fill="${color}" />
      <path d="M300 0H350V50H300V0Z" fill="${color}" />
      <path d="M250 100H300V150H250V100Z" fill="${color}" />
      <path d="M100 0H150V50H100V0Z" fill="${color}" />
      <path d="M350 0H400V50H350V0Z" fill="${color}" />
    </svg>`
}
