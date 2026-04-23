"use client";

import { Menu } from "@base-ui/react/menu";
import { cn } from "@/lib/utils";

type UserMenuProps = {
  name?: string;
  email?: string;
  picture?: string;
};

export function UserMenu({ name, email, picture }: UserMenuProps) {
  const displayName = name ?? email ?? "Account";
  const initial = (name ?? email ?? "?").charAt(0).toUpperCase();

  return (
    <Menu.Root>
      <Menu.Trigger
        aria-label={`Open account menu for ${displayName}`}
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-muted text-[11px] font-medium text-ink ring-1 ring-border",
          "outline-hidden transition-shadow hover:ring-foreground/30 focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        {picture ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={picture}
            alt=""
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          initial
        )}
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner align="end" side="bottom" sideOffset={8} className="isolate z-50">
          <Menu.Popup
            className={cn(
              "z-50 min-w-44 origin-(--transform-origin) rounded-lg bg-popover p-1.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden",
              "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 duration-100"
            )}
          >
            {(name || email) && (
              <div className="flex flex-col gap-0.5 px-2.5 py-1.5">
                {name && <span className="truncate text-ink">{name}</span>}
                {email && (
                  <span className="truncate text-xs text-ink-muted">{email}</span>
                )}
              </div>
            )}
            <div className="my-1 h-px bg-border" />
            <Menu.LinkItem
              href="/auth/logout"
              closeOnClick
              className={cn(
                "flex cursor-pointer select-none items-center rounded-md px-2.5 py-1.5 text-sm outline-hidden",
                "data-[highlighted]:bg-muted data-[highlighted]:text-ink"
              )}
            >
              Log out
            </Menu.LinkItem>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
