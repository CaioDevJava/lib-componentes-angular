import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, ChangeDetectionStrategy, Component, HostListener, inject, ChangeDetectorRef } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class BaseButton {
    label = '';
    variant = 'primary';
    disabled = false;
    loading = false;
    loadingText = 'Carregando…';
    type = 'button';
    baseClick = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseButton, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseButton, isStandalone: true, selector: "base-button", inputs: { label: "label", variant: "variant", disabled: "disabled", loading: "loading", loadingText: "loadingText", type: "type" }, outputs: { baseClick: "baseClick" }, ngImport: i0, template: "<button \n  [class]=\"'base-button base-button--' + variant\" \n  [disabled]=\"disabled || loading\" \n  [attr.type]=\"type\" \n  (click)=\"baseClick.emit($event)\">\n  @if (loading) {\n    {{ loadingText }}\n  } @else if (label) {\n    {{ label }}\n  } @else {\n    <ng-content />\n  }\n</button>\n", styles: [":host{display:inline-block}.base-button{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border:1px solid transparent;border-radius:var(--base-radius);cursor:pointer;font-family:inherit;font-weight:500;font-size:.95rem;line-height:1.25rem;padding:.65rem 1.25rem;transition:var(--base-transition);box-shadow:var(--base-shadow-sm);-webkit-user-select:none;user-select:none}.base-button:hover:not(:disabled){transform:translateY(-1px);box-shadow:var(--base-shadow)}.base-button:active:not(:disabled){transform:translateY(0);box-shadow:var(--base-shadow-sm)}.base-button:focus-visible{outline:none;box-shadow:var(--base-ring)}.base-button:disabled{cursor:not-allowed;opacity:.6;box-shadow:none}.base-button--primary{background:linear-gradient(135deg,var(--base-primary) 0%,#4338ca 100%);color:#fff;border-color:#ffffff1a}.base-button--primary:hover:not(:disabled){background:linear-gradient(135deg,#4338ca,#3730a3)}.base-button--secondary{background-color:var(--base-secondary);color:var(--base-text);border-color:var(--base-border)}.base-button--secondary:hover:not(:disabled){background-color:var(--base-secondary-hover)}.base-button--ghost{background-color:transparent;color:var(--base-primary);box-shadow:none}.base-button--ghost:hover:not(:disabled){background-color:var(--base-primary-light);box-shadow:none}.base-button--danger{background:linear-gradient(135deg,var(--base-danger) 0%,var(--base-danger-hover) 100%);color:#fff}.base-button--danger:hover:not(:disabled){background:linear-gradient(135deg,var(--base-danger-hover) 0%,#b91c1c 100%)}.base-button--success{background:linear-gradient(135deg,var(--base-success) 0%,#059669 100%);color:#fff}.base-button--success:hover:not(:disabled){background:linear-gradient(135deg,#059669,#047857)}.base-button--warning{background:linear-gradient(135deg,var(--base-warning) 0%,#d97706 100%);color:#fff}.base-button--warning:hover:not(:disabled){background:linear-gradient(135deg,#d97706,#b45309)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseButton, decorators: [{
            type: Component,
            args: [{ selector: 'base-button', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<button \n  [class]=\"'base-button base-button--' + variant\" \n  [disabled]=\"disabled || loading\" \n  [attr.type]=\"type\" \n  (click)=\"baseClick.emit($event)\">\n  @if (loading) {\n    {{ loadingText }}\n  } @else if (label) {\n    {{ label }}\n  } @else {\n    <ng-content />\n  }\n</button>\n", styles: [":host{display:inline-block}.base-button{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border:1px solid transparent;border-radius:var(--base-radius);cursor:pointer;font-family:inherit;font-weight:500;font-size:.95rem;line-height:1.25rem;padding:.65rem 1.25rem;transition:var(--base-transition);box-shadow:var(--base-shadow-sm);-webkit-user-select:none;user-select:none}.base-button:hover:not(:disabled){transform:translateY(-1px);box-shadow:var(--base-shadow)}.base-button:active:not(:disabled){transform:translateY(0);box-shadow:var(--base-shadow-sm)}.base-button:focus-visible{outline:none;box-shadow:var(--base-ring)}.base-button:disabled{cursor:not-allowed;opacity:.6;box-shadow:none}.base-button--primary{background:linear-gradient(135deg,var(--base-primary) 0%,#4338ca 100%);color:#fff;border-color:#ffffff1a}.base-button--primary:hover:not(:disabled){background:linear-gradient(135deg,#4338ca,#3730a3)}.base-button--secondary{background-color:var(--base-secondary);color:var(--base-text);border-color:var(--base-border)}.base-button--secondary:hover:not(:disabled){background-color:var(--base-secondary-hover)}.base-button--ghost{background-color:transparent;color:var(--base-primary);box-shadow:none}.base-button--ghost:hover:not(:disabled){background-color:var(--base-primary-light);box-shadow:none}.base-button--danger{background:linear-gradient(135deg,var(--base-danger) 0%,var(--base-danger-hover) 100%);color:#fff}.base-button--danger:hover:not(:disabled){background:linear-gradient(135deg,var(--base-danger-hover) 0%,#b91c1c 100%)}.base-button--success{background:linear-gradient(135deg,var(--base-success) 0%,#059669 100%);color:#fff}.base-button--success:hover:not(:disabled){background:linear-gradient(135deg,#059669,#047857)}.base-button--warning{background:linear-gradient(135deg,var(--base-warning) 0%,#d97706 100%);color:#fff}.base-button--warning:hover:not(:disabled){background:linear-gradient(135deg,#d97706,#b45309)}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], variant: [{
                type: Input
            }], disabled: [{
                type: Input
            }], loading: [{
                type: Input
            }], loadingText: [{
                type: Input
            }], type: [{
                type: Input
            }], baseClick: [{
                type: Output
            }] } });

class BaseInput {
    label = '';
    id = 'base-input';
    value = '';
    placeholder = '';
    type = 'text';
    disabled = false;
    required = false;
    state = 'default';
    helperText = '';
    baseInput = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseInput, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseInput, isStandalone: true, selector: "base-input", inputs: { label: "label", id: "id", value: "value", placeholder: "placeholder", type: "type", disabled: "disabled", required: "required", state: "state", helperText: "helperText" }, outputs: { baseInput: "baseInput" }, ngImport: i0, template: "<label [attr.for]=\"id\">\n  <span>{{label}}</span>\n  <input \n    [id]=\"id\" \n    [type]=\"type\" \n    [value]=\"value\" \n    [placeholder]=\"placeholder\" \n    [disabled]=\"disabled\" \n    [required]=\"required\" \n    [class]=\"'base-input--' + state\"\n    (input)=\"baseInput.emit($any($event.target).value)\" \n  />\n  @if (helperText) {\n    <small class=\"base-helper-text\" [class]=\"'base-helper-text--' + state\">{{ helperText }}</small>\n  }\n</label>\n", styles: [":host{display:block;width:100%}label{display:flex;flex-direction:column;gap:.375rem;font-weight:500;font-size:.875rem;color:var(--base-text)}input{width:100%;border:1px solid var(--base-border);border-radius:var(--base-radius);background-color:var(--base-surface);font-family:inherit;font-size:.95rem;color:var(--base-text);padding:.65rem .875rem;transition:var(--base-transition);box-shadow:var(--base-shadow-sm)}input::placeholder{color:var(--base-text-muted)}input:hover:not(:disabled){border-color:var(--base-text-muted)}input:focus{outline:none;background-color:var(--base-bg);border-color:var(--base-border-focus);box-shadow:var(--base-ring)}input:disabled{cursor:not-allowed;opacity:.6;background-color:var(--base-secondary)}input.base-input--error{border-color:var(--base-danger)}input.base-input--error:focus{box-shadow:0 0 0 3px #ef444440}input.base-input--success{border-color:var(--base-success)}input.base-input--success:focus{box-shadow:0 0 0 3px #10b98140}input.base-input--warning{border-color:var(--base-warning)}input.base-input--warning:focus{box-shadow:0 0 0 3px #f59e0b40}.base-helper-text{font-size:.8rem;margin-top:.125rem}.base-helper-text--default{color:var(--base-text-muted)}.base-helper-text--success{color:var(--base-success);font-weight:500}.base-helper-text--error{color:var(--base-danger);font-weight:500}.base-helper-text--warning{color:#d97706;font-weight:500}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseInput, decorators: [{
            type: Component,
            args: [{ selector: 'base-input', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<label [attr.for]=\"id\">\n  <span>{{label}}</span>\n  <input \n    [id]=\"id\" \n    [type]=\"type\" \n    [value]=\"value\" \n    [placeholder]=\"placeholder\" \n    [disabled]=\"disabled\" \n    [required]=\"required\" \n    [class]=\"'base-input--' + state\"\n    (input)=\"baseInput.emit($any($event.target).value)\" \n  />\n  @if (helperText) {\n    <small class=\"base-helper-text\" [class]=\"'base-helper-text--' + state\">{{ helperText }}</small>\n  }\n</label>\n", styles: [":host{display:block;width:100%}label{display:flex;flex-direction:column;gap:.375rem;font-weight:500;font-size:.875rem;color:var(--base-text)}input{width:100%;border:1px solid var(--base-border);border-radius:var(--base-radius);background-color:var(--base-surface);font-family:inherit;font-size:.95rem;color:var(--base-text);padding:.65rem .875rem;transition:var(--base-transition);box-shadow:var(--base-shadow-sm)}input::placeholder{color:var(--base-text-muted)}input:hover:not(:disabled){border-color:var(--base-text-muted)}input:focus{outline:none;background-color:var(--base-bg);border-color:var(--base-border-focus);box-shadow:var(--base-ring)}input:disabled{cursor:not-allowed;opacity:.6;background-color:var(--base-secondary)}input.base-input--error{border-color:var(--base-danger)}input.base-input--error:focus{box-shadow:0 0 0 3px #ef444440}input.base-input--success{border-color:var(--base-success)}input.base-input--success:focus{box-shadow:0 0 0 3px #10b98140}input.base-input--warning{border-color:var(--base-warning)}input.base-input--warning:focus{box-shadow:0 0 0 3px #f59e0b40}.base-helper-text{font-size:.8rem;margin-top:.125rem}.base-helper-text--default{color:var(--base-text-muted)}.base-helper-text--success{color:var(--base-success);font-weight:500}.base-helper-text--error{color:var(--base-danger);font-weight:500}.base-helper-text--warning{color:#d97706;font-weight:500}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], id: [{
                type: Input
            }], value: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], type: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], state: [{
                type: Input
            }], helperText: [{
                type: Input
            }], baseInput: [{
                type: Output
            }] } });

class BaseSelect {
    label = '';
    id = 'base-select';
    value = '';
    options = [];
    disabled = false;
    required = false;
    state = 'default';
    helperText = '';
    baseChange = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseSelect, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseSelect, isStandalone: true, selector: "base-select", inputs: { label: "label", id: "id", value: "value", options: "options", disabled: "disabled", required: "required", state: "state", helperText: "helperText" }, outputs: { baseChange: "baseChange" }, ngImport: i0, template: "<label [attr.for]=\"id\">\n  <span>{{ label }}</span>\n  <select \n    [id]=\"id\" \n    [disabled]=\"disabled\" \n    [required]=\"required\"\n    [class]=\"'base-select--' + state\"\n    (change)=\"baseChange.emit($any($event.target).value)\">\n    @for (option of options; track option.value) {\n      <option [value]=\"option.value\" [selected]=\"option.value === value\" [disabled]=\"option.disabled\">\n        {{ option.label }}\n      </option>\n    }\n  </select>\n  @if (helperText) {\n    <small class=\"base-helper-text\" [class]=\"'base-helper-text--' + state\">{{ helperText }}</small>\n  }\n</label>\n", styles: [":host{display:block;width:100%}label{display:flex;flex-direction:column;gap:.375rem;font-weight:500;font-size:.875rem;color:var(--base-text)}select{width:100%;border:1px solid var(--base-border);border-radius:var(--base-radius);background-color:var(--base-surface);font-family:inherit;font-size:.95rem;color:var(--base-text);padding:.65rem 2.5rem .65rem .875rem;transition:var(--base-transition);box-shadow:var(--base-shadow-sm);cursor:pointer;appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right .75rem center;background-size:1rem}select:hover:not(:disabled){border-color:var(--base-text-muted)}select:focus{outline:none;background-color:var(--base-bg);border-color:var(--base-border-focus);box-shadow:var(--base-ring)}select:disabled{cursor:not-allowed;opacity:.6;background-color:var(--base-secondary)}select.base-select--error{border-color:var(--base-danger)}select.base-select--error:focus{box-shadow:0 0 0 3px #ef444440}select.base-select--success{border-color:var(--base-success)}select.base-select--success:focus{box-shadow:0 0 0 3px #10b98140}select.base-select--warning{border-color:var(--base-warning)}select.base-select--warning:focus{box-shadow:0 0 0 3px #f59e0b40}.base-helper-text{font-size:.8rem;margin-top:.125rem}.base-helper-text--default{color:var(--base-text-muted)}.base-helper-text--success{color:var(--base-success);font-weight:500}.base-helper-text--error{color:var(--base-danger);font-weight:500}.base-helper-text--warning{color:#d97706;font-weight:500}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseSelect, decorators: [{
            type: Component,
            args: [{ selector: 'base-select', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<label [attr.for]=\"id\">\n  <span>{{ label }}</span>\n  <select \n    [id]=\"id\" \n    [disabled]=\"disabled\" \n    [required]=\"required\"\n    [class]=\"'base-select--' + state\"\n    (change)=\"baseChange.emit($any($event.target).value)\">\n    @for (option of options; track option.value) {\n      <option [value]=\"option.value\" [selected]=\"option.value === value\" [disabled]=\"option.disabled\">\n        {{ option.label }}\n      </option>\n    }\n  </select>\n  @if (helperText) {\n    <small class=\"base-helper-text\" [class]=\"'base-helper-text--' + state\">{{ helperText }}</small>\n  }\n</label>\n", styles: [":host{display:block;width:100%}label{display:flex;flex-direction:column;gap:.375rem;font-weight:500;font-size:.875rem;color:var(--base-text)}select{width:100%;border:1px solid var(--base-border);border-radius:var(--base-radius);background-color:var(--base-surface);font-family:inherit;font-size:.95rem;color:var(--base-text);padding:.65rem 2.5rem .65rem .875rem;transition:var(--base-transition);box-shadow:var(--base-shadow-sm);cursor:pointer;appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right .75rem center;background-size:1rem}select:hover:not(:disabled){border-color:var(--base-text-muted)}select:focus{outline:none;background-color:var(--base-bg);border-color:var(--base-border-focus);box-shadow:var(--base-ring)}select:disabled{cursor:not-allowed;opacity:.6;background-color:var(--base-secondary)}select.base-select--error{border-color:var(--base-danger)}select.base-select--error:focus{box-shadow:0 0 0 3px #ef444440}select.base-select--success{border-color:var(--base-success)}select.base-select--success:focus{box-shadow:0 0 0 3px #10b98140}select.base-select--warning{border-color:var(--base-warning)}select.base-select--warning:focus{box-shadow:0 0 0 3px #f59e0b40}.base-helper-text{font-size:.8rem;margin-top:.125rem}.base-helper-text--default{color:var(--base-text-muted)}.base-helper-text--success{color:var(--base-success);font-weight:500}.base-helper-text--error{color:var(--base-danger);font-weight:500}.base-helper-text--warning{color:#d97706;font-weight:500}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], id: [{
                type: Input
            }], value: [{
                type: Input
            }], options: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], state: [{
                type: Input
            }], helperText: [{
                type: Input
            }], baseChange: [{
                type: Output
            }] } });

class BaseDropdown {
    elementRef;
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    label = 'Opções';
    open = false;
    toggle() { this.open = !this.open; }
    onClick(event) { if (!this.elementRef.nativeElement.contains(event.target)) {
        this.open = false;
    } }
    onEscape() { this.open = false; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseDropdown, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseDropdown, isStandalone: true, selector: "base-dropdown", inputs: { label: "label" }, host: { listeners: { "document:click": "onClick($event)", "document:keydown.escape": "onEscape()" } }, ngImport: i0, template: "<div class=\"base-dropdown\"><button type=\"button\" [attr.aria-expanded]=\"open\" (click)=\"toggle()\">{{label}}</button>@if(open){<div class=\"base-menu\"><ng-content /></div>}</div>\n", styles: [":host{position:relative;display:inline-block}.base-dropdown{position:absolute;top:calc(100% + .5rem);left:0;background:var(--base-bg);border:1px solid var(--base-border);border-radius:var(--base-radius);box-shadow:var(--base-shadow-md);min-width:12rem;padding:.5rem;z-index:50;animation:fadeIn .15s ease-out}.base-dropdown button,.base-dropdown a{display:block;width:100%;padding:.5rem .75rem;text-align:left;background:transparent;border:0;border-radius:var(--base-radius-sm);color:var(--base-text);font-size:.9rem;cursor:pointer;text-decoration:none;transition:var(--base-transition)}.base-dropdown button:hover,.base-dropdown a:hover{background-color:var(--base-secondary);color:var(--base-primary)}@keyframes fadeIn{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseDropdown, decorators: [{
            type: Component,
            args: [{ selector: 'base-dropdown', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"base-dropdown\"><button type=\"button\" [attr.aria-expanded]=\"open\" (click)=\"toggle()\">{{label}}</button>@if(open){<div class=\"base-menu\"><ng-content /></div>}</div>\n", styles: [":host{position:relative;display:inline-block}.base-dropdown{position:absolute;top:calc(100% + .5rem);left:0;background:var(--base-bg);border:1px solid var(--base-border);border-radius:var(--base-radius);box-shadow:var(--base-shadow-md);min-width:12rem;padding:.5rem;z-index:50;animation:fadeIn .15s ease-out}.base-dropdown button,.base-dropdown a{display:block;width:100%;padding:.5rem .75rem;text-align:left;background:transparent;border:0;border-radius:var(--base-radius-sm);color:var(--base-text);font-size:.9rem;cursor:pointer;text-decoration:none;transition:var(--base-transition)}.base-dropdown button:hover,.base-dropdown a:hover{background-color:var(--base-secondary);color:var(--base-primary)}@keyframes fadeIn{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { label: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }], onEscape: [{
                type: HostListener,
                args: ['document:keydown.escape']
            }] } });

class BaseModal {
    open = false;
    title = '';
    size = 'md';
    description = '';
    primaryButton = '';
    secondaryButton = '';
    baseClose = new EventEmitter();
    closed = new EventEmitter();
    eventoPrimaryButton = new EventEmitter();
    eventoSecundaryButton = new EventEmitter();
    close() {
        this.baseClose.emit();
        this.closed.emit();
    }
    onEscape() {
        if (this.open) {
            this.close();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseModal, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseModal, isStandalone: true, selector: "base-modal", inputs: { open: "open", title: "title", size: "size", description: "description", primaryButton: "primaryButton", secondaryButton: "secondaryButton" }, outputs: { baseClose: "baseClose", closed: "closed", eventoPrimaryButton: "eventoPrimaryButton", eventoSecundaryButton: "eventoSecundaryButton" }, host: { listeners: { "document:keydown.escape": "onEscape()" } }, ngImport: i0, template: "@if (open) {\n  <div class=\"base-modal-backdrop\" (click)=\"$event.target === $event.currentTarget && close()\">\n    <section class=\"base-modal\" [class]=\"'base-modal--' + size\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"base-modal-title\">\n      <header>\n        <h2 id=\"base-modal-title\">{{ title }}</h2>\n        <button type=\"button\" aria-label=\"Fechar\" (click)=\"close()\">\u00D7</button>\n      </header>\n      <div class=\"base-modal-body\">\n        @if (description) {\n          <p>{{ description }}</p>\n        }\n        <ng-content />\n      </div>\n      @if (primaryButton || secondaryButton) {\n        <footer>\n          @if (secondaryButton) {\n            <button type=\"button\" class=\"base-btn-secondary\" (click)=\"eventoSecundaryButton.emit()\">{{ secondaryButton }}</button>\n          }\n          @if (primaryButton) {\n            <button type=\"button\" class=\"base-btn-primary\" (click)=\"eventoPrimaryButton.emit()\">{{ primaryButton }}</button>\n          }\n        </footer>\n      }\n    </section>\n  </div>\n}\n", styles: [".base-modal-backdrop{align-items:center;background:#0f172a99;backdrop-filter:blur(4px);display:flex;inset:0;justify-content:center;padding:1.5rem;position:fixed;z-index:1000;animation:fadeIn .2s cubic-bezier(.4,0,.2,1)}.base-modal{background:var(--base-bg);border-radius:calc(var(--base-radius) * 1.25);box-shadow:var(--base-shadow-lg);max-width:34rem;padding:1.75rem;width:100%;border:1px solid var(--base-border);animation:scaleUp .2s cubic-bezier(.4,0,.2,1)}.base-modal header{align-items:center;display:flex;justify-content:space-between;padding-bottom:1rem;border-bottom:1px solid var(--base-secondary);margin-bottom:1.25rem}.base-modal header h3,.base-modal header h2,.base-modal header h4{font-size:1.25rem;font-weight:600;color:var(--base-text);margin:0}.base-modal header button{background:transparent;border:0;cursor:pointer;font-size:1.25rem;color:var(--base-text-muted);border-radius:var(--base-radius-sm);width:2rem;height:2rem;display:inline-flex;align-items:center;justify-content:center;transition:var(--base-transition)}.base-modal header button:hover{background-color:var(--base-secondary);color:var(--base-text)}.base-modal main{color:var(--base-text-muted);font-size:.95rem;line-height:1.5}.base-modal footer{align-items:center;display:flex;gap:.75rem;justify-content:flex-end;margin-top:1.5rem;padding-top:1rem;border-top:1px solid var(--base-secondary)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes scaleUp{0%{opacity:0;transform:scale(.95) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseModal, decorators: [{
            type: Component,
            args: [{ selector: 'base-modal', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (open) {\n  <div class=\"base-modal-backdrop\" (click)=\"$event.target === $event.currentTarget && close()\">\n    <section class=\"base-modal\" [class]=\"'base-modal--' + size\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"base-modal-title\">\n      <header>\n        <h2 id=\"base-modal-title\">{{ title }}</h2>\n        <button type=\"button\" aria-label=\"Fechar\" (click)=\"close()\">\u00D7</button>\n      </header>\n      <div class=\"base-modal-body\">\n        @if (description) {\n          <p>{{ description }}</p>\n        }\n        <ng-content />\n      </div>\n      @if (primaryButton || secondaryButton) {\n        <footer>\n          @if (secondaryButton) {\n            <button type=\"button\" class=\"base-btn-secondary\" (click)=\"eventoSecundaryButton.emit()\">{{ secondaryButton }}</button>\n          }\n          @if (primaryButton) {\n            <button type=\"button\" class=\"base-btn-primary\" (click)=\"eventoPrimaryButton.emit()\">{{ primaryButton }}</button>\n          }\n        </footer>\n      }\n    </section>\n  </div>\n}\n", styles: [".base-modal-backdrop{align-items:center;background:#0f172a99;backdrop-filter:blur(4px);display:flex;inset:0;justify-content:center;padding:1.5rem;position:fixed;z-index:1000;animation:fadeIn .2s cubic-bezier(.4,0,.2,1)}.base-modal{background:var(--base-bg);border-radius:calc(var(--base-radius) * 1.25);box-shadow:var(--base-shadow-lg);max-width:34rem;padding:1.75rem;width:100%;border:1px solid var(--base-border);animation:scaleUp .2s cubic-bezier(.4,0,.2,1)}.base-modal header{align-items:center;display:flex;justify-content:space-between;padding-bottom:1rem;border-bottom:1px solid var(--base-secondary);margin-bottom:1.25rem}.base-modal header h3,.base-modal header h2,.base-modal header h4{font-size:1.25rem;font-weight:600;color:var(--base-text);margin:0}.base-modal header button{background:transparent;border:0;cursor:pointer;font-size:1.25rem;color:var(--base-text-muted);border-radius:var(--base-radius-sm);width:2rem;height:2rem;display:inline-flex;align-items:center;justify-content:center;transition:var(--base-transition)}.base-modal header button:hover{background-color:var(--base-secondary);color:var(--base-text)}.base-modal main{color:var(--base-text-muted);font-size:.95rem;line-height:1.5}.base-modal footer{align-items:center;display:flex;gap:.75rem;justify-content:flex-end;margin-top:1.5rem;padding-top:1rem;border-top:1px solid var(--base-secondary)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes scaleUp{0%{opacity:0;transform:scale(.95) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}\n"] }]
        }], propDecorators: { open: [{
                type: Input
            }], title: [{
                type: Input
            }], size: [{
                type: Input
            }], description: [{
                type: Input
            }], primaryButton: [{
                type: Input
            }], secondaryButton: [{
                type: Input
            }], baseClose: [{
                type: Output
            }], closed: [{
                type: Output
            }], eventoPrimaryButton: [{
                type: Output
            }], eventoSecundaryButton: [{
                type: Output
            }], onEscape: [{
                type: HostListener,
                args: ['document:keydown.escape']
            }] } });

class BaseTable {
    columns = [];
    rows = [];
    dados = [];
    emptyText = 'Nenhum registro encontrado';
    actions = [];
    noDataValue = '-';
    actionClick = new EventEmitter();
    rowClick = new EventEmitter();
    key(column) {
        return typeof column === 'string' ? column : column.key;
    }
    label(column) {
        return typeof column === 'string' ? column : column.label;
    }
    get records() {
        return this.dados.length ? this.dados : this.rows;
    }
    formatCell(value) {
        if (value === null || value === undefined || value === '') {
            return this.noDataValue;
        }
        return String(value);
    }
    onActionClick(actionId, row, event) {
        event.stopPropagation();
        this.actionClick.emit({ action: actionId, row });
    }
    onRowClick(row) {
        this.rowClick.emit(row);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseTable, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseTable, isStandalone: true, selector: "base-table", inputs: { columns: "columns", rows: "rows", dados: "dados", emptyText: "emptyText", actions: "actions", noDataValue: "noDataValue" }, outputs: { actionClick: "actionClick", rowClick: "rowClick" }, ngImport: i0, template: "<div class=\"base-table-wrapper\">\n  <table>\n    <thead>\n      <tr>\n        @for (column of columns; track key(column)) {\n          <th>\n            <div class=\"th-content\">\n              <span>{{ label(column) }}</span>\n            </div>\n          </th>\n        }\n        @if (actions.length > 0) {\n          <th class=\"th-actions\">A\u00E7\u00F5es</th>\n        }\n      </tr>\n    </thead>\n    <tbody>\n      @for (row of records; track $index) {\n        <tr (click)=\"onRowClick(row)\" [class.clickable]=\"rowClick.observed\">\n          @for (column of columns; track key(column)) {\n            <td>{{ formatCell(row[typeof column === 'string' ? column : column.key]) }}</td>\n          }\n          @if (actions.length > 0) {\n            <td class=\"td-actions\" (click)=\"$event.stopPropagation()\">\n              <div class=\"action-buttons\">\n                @for (action of actions; track action.id) {\n                  <button\n                    type=\"button\"\n                    class=\"action-btn\"\n                    [class.btn-danger]=\"action.variant === 'danger'\"\n                    [class.btn-primary]=\"action.variant === 'primary'\"\n                    (click)=\"onActionClick(action.id, row, $event)\"\n                    [attr.aria-label]=\"action.label\">\n                    {{ action.label }}\n                  </button>\n                }\n              </div>\n            </td>\n          }\n        </tr>\n      }\n      @if (!records.length) {\n        <tr class=\"base-table-empty\">\n          <td [attr.colspan]=\"actions.length > 0 ? columns.length + 1 : columns.length\">\n            <div class=\"empty-state\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>\n              </svg>\n              <span>{{ emptyText }}</span>\n            </div>\n          </td>\n        </tr>\n      }\n    </tbody>\n  </table>\n</div>\n", styles: [".base-table-wrapper{width:100%;overflow-x:auto;border:1px solid var(--base-border-color, #e2e8f0);border-radius:var(--base-border-radius, .5rem);background-color:var(--base-bg-color, #ffffff);box-shadow:0 1px 3px #0000000d}.base-table-wrapper table{width:100%;border-collapse:collapse;font-family:var(--base-font-family, inherit);font-size:.875rem;color:var(--base-text-color, #334155);text-align:left}.base-table-wrapper table thead{background-color:var(--base-table-header-bg, #f8fafc);border-bottom:1px solid var(--base-border-color, #e2e8f0)}.base-table-wrapper table thead th{padding:.75rem 1rem;font-weight:600;color:var(--base-text-muted, #64748b);text-transform:uppercase;font-size:.75rem;letter-spacing:.05em;white-space:nowrap}.base-table-wrapper table thead th.th-actions{text-align:right}.base-table-wrapper table tbody tr{border-bottom:1px solid var(--base-border-color, #f1f5f9);transition:background-color .15s ease}.base-table-wrapper table tbody tr:last-child{border-bottom:none}.base-table-wrapper table tbody tr:hover{background-color:var(--base-hover-bg, #f8fafc)}.base-table-wrapper table tbody tr.clickable{cursor:pointer}.base-table-wrapper table tbody tr td{padding:.875rem 1rem;color:var(--base-text-color, #0f172a);white-space:nowrap}.base-table-wrapper table tbody tr td.td-actions{text-align:right}.action-buttons{display:flex;align-items:center;justify-content:flex-end;gap:.5rem}.action-btn{padding:.375rem .75rem;font-size:.75rem;font-weight:500;border-radius:var(--base-border-radius, .375rem);border:1px solid var(--base-border-color, #cbd5e1);background-color:var(--base-bg-color, #ffffff);color:var(--base-text-color, #334155);cursor:pointer;transition:all .2s ease}.action-btn:hover{background-color:var(--base-hover-bg, #f1f5f9);border-color:var(--base-hover-border, #94a3b8)}.action-btn.btn-primary{background-color:var(--base-primary-color, #2563eb);border-color:var(--base-primary-color, #2563eb);color:#fff}.action-btn.btn-primary:hover{background-color:var(--base-primary-hover, #1d4ed8)}.action-btn.btn-danger{background-color:#ef4444;border-color:#ef4444;color:#fff}.action-btn.btn-danger:hover{background-color:#dc2626}.base-table-empty{text-align:center}.base-table-empty td{padding:3rem 1rem!important}.empty-state{display:flex;flex-direction:column;align-items:center;gap:.75rem;color:var(--base-text-muted, #94a3b8)}.empty-state svg{stroke:currentColor;opacity:.6}.empty-state span{font-size:.875rem;font-weight:500}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseTable, decorators: [{
            type: Component,
            args: [{ selector: 'base-table', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"base-table-wrapper\">\n  <table>\n    <thead>\n      <tr>\n        @for (column of columns; track key(column)) {\n          <th>\n            <div class=\"th-content\">\n              <span>{{ label(column) }}</span>\n            </div>\n          </th>\n        }\n        @if (actions.length > 0) {\n          <th class=\"th-actions\">A\u00E7\u00F5es</th>\n        }\n      </tr>\n    </thead>\n    <tbody>\n      @for (row of records; track $index) {\n        <tr (click)=\"onRowClick(row)\" [class.clickable]=\"rowClick.observed\">\n          @for (column of columns; track key(column)) {\n            <td>{{ formatCell(row[typeof column === 'string' ? column : column.key]) }}</td>\n          }\n          @if (actions.length > 0) {\n            <td class=\"td-actions\" (click)=\"$event.stopPropagation()\">\n              <div class=\"action-buttons\">\n                @for (action of actions; track action.id) {\n                  <button\n                    type=\"button\"\n                    class=\"action-btn\"\n                    [class.btn-danger]=\"action.variant === 'danger'\"\n                    [class.btn-primary]=\"action.variant === 'primary'\"\n                    (click)=\"onActionClick(action.id, row, $event)\"\n                    [attr.aria-label]=\"action.label\">\n                    {{ action.label }}\n                  </button>\n                }\n              </div>\n            </td>\n          }\n        </tr>\n      }\n      @if (!records.length) {\n        <tr class=\"base-table-empty\">\n          <td [attr.colspan]=\"actions.length > 0 ? columns.length + 1 : columns.length\">\n            <div class=\"empty-state\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"/>\n              </svg>\n              <span>{{ emptyText }}</span>\n            </div>\n          </td>\n        </tr>\n      }\n    </tbody>\n  </table>\n</div>\n", styles: [".base-table-wrapper{width:100%;overflow-x:auto;border:1px solid var(--base-border-color, #e2e8f0);border-radius:var(--base-border-radius, .5rem);background-color:var(--base-bg-color, #ffffff);box-shadow:0 1px 3px #0000000d}.base-table-wrapper table{width:100%;border-collapse:collapse;font-family:var(--base-font-family, inherit);font-size:.875rem;color:var(--base-text-color, #334155);text-align:left}.base-table-wrapper table thead{background-color:var(--base-table-header-bg, #f8fafc);border-bottom:1px solid var(--base-border-color, #e2e8f0)}.base-table-wrapper table thead th{padding:.75rem 1rem;font-weight:600;color:var(--base-text-muted, #64748b);text-transform:uppercase;font-size:.75rem;letter-spacing:.05em;white-space:nowrap}.base-table-wrapper table thead th.th-actions{text-align:right}.base-table-wrapper table tbody tr{border-bottom:1px solid var(--base-border-color, #f1f5f9);transition:background-color .15s ease}.base-table-wrapper table tbody tr:last-child{border-bottom:none}.base-table-wrapper table tbody tr:hover{background-color:var(--base-hover-bg, #f8fafc)}.base-table-wrapper table tbody tr.clickable{cursor:pointer}.base-table-wrapper table tbody tr td{padding:.875rem 1rem;color:var(--base-text-color, #0f172a);white-space:nowrap}.base-table-wrapper table tbody tr td.td-actions{text-align:right}.action-buttons{display:flex;align-items:center;justify-content:flex-end;gap:.5rem}.action-btn{padding:.375rem .75rem;font-size:.75rem;font-weight:500;border-radius:var(--base-border-radius, .375rem);border:1px solid var(--base-border-color, #cbd5e1);background-color:var(--base-bg-color, #ffffff);color:var(--base-text-color, #334155);cursor:pointer;transition:all .2s ease}.action-btn:hover{background-color:var(--base-hover-bg, #f1f5f9);border-color:var(--base-hover-border, #94a3b8)}.action-btn.btn-primary{background-color:var(--base-primary-color, #2563eb);border-color:var(--base-primary-color, #2563eb);color:#fff}.action-btn.btn-primary:hover{background-color:var(--base-primary-hover, #1d4ed8)}.action-btn.btn-danger{background-color:#ef4444;border-color:#ef4444;color:#fff}.action-btn.btn-danger:hover{background-color:#dc2626}.base-table-empty{text-align:center}.base-table-empty td{padding:3rem 1rem!important}.empty-state{display:flex;flex-direction:column;align-items:center;gap:.75rem;color:var(--base-text-muted, #94a3b8)}.empty-state svg{stroke:currentColor;opacity:.6}.empty-state span{font-size:.875rem;font-weight:500}\n"] }]
        }], propDecorators: { columns: [{
                type: Input
            }], rows: [{
                type: Input
            }], dados: [{
                type: Input
            }], emptyText: [{
                type: Input
            }], actions: [{
                type: Input
            }], noDataValue: [{
                type: Input
            }], actionClick: [{
                type: Output
            }], rowClick: [{
                type: Output
            }] } });

class BaseChip {
    label = '';
    removable = false;
    removeLabel = 'Remover';
    backgroundColor = '';
    textColor = '';
    baseRemove = new EventEmitter();
    removed = new EventEmitter();
    onRemove(event) {
        event.stopPropagation();
        this.baseRemove.emit();
        this.removed.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseChip, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseChip, isStandalone: true, selector: "base-chip", inputs: { label: "label", removable: "removable", removeLabel: "removeLabel", backgroundColor: "backgroundColor", textColor: "textColor" }, outputs: { baseRemove: "baseRemove", removed: "removed" }, ngImport: i0, template: "<span \n  class=\"base-chip\" \n  [style.background-color]=\"backgroundColor || null\" \n  [style.color]=\"textColor || null\"\n  [style.border-color]=\"backgroundColor ? 'transparent' : null\">\n  @if (label) {\n    <span class=\"base-chip-text\">{{ label }}</span>\n  }\n  <ng-content />\n  @if (removable) {\n    <button type=\"button\" class=\"base-chip-close\" [attr.aria-label]=\"removeLabel\" (click)=\"onRemove($event)\">\u00D7</button>\n  }\n</span>\n", styles: [":host{display:inline-block}.base-chip{display:inline-flex;align-items:center;gap:.5rem;background-color:var(--base-secondary);color:var(--base-text);border-radius:9999px!important;padding:.4rem 1rem;font-size:.85rem;font-weight:500;border:1px solid var(--base-border);transition:var(--base-transition);-webkit-user-select:none;user-select:none}.base-chip .base-chip-text{font-weight:500}.base-chip .base-chip-close{background:transparent;border:none;cursor:pointer;font-size:1rem;line-height:1;color:currentColor;opacity:.7;padding:0;display:inline-flex;align-items:center;justify-content:center;width:1.25rem;height:1.25rem;border-radius:50%!important;transition:var(--base-transition)}.base-chip .base-chip-close:hover{opacity:1;background-color:#0000001a}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseChip, decorators: [{
            type: Component,
            args: [{ selector: 'base-chip', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<span \n  class=\"base-chip\" \n  [style.background-color]=\"backgroundColor || null\" \n  [style.color]=\"textColor || null\"\n  [style.border-color]=\"backgroundColor ? 'transparent' : null\">\n  @if (label) {\n    <span class=\"base-chip-text\">{{ label }}</span>\n  }\n  <ng-content />\n  @if (removable) {\n    <button type=\"button\" class=\"base-chip-close\" [attr.aria-label]=\"removeLabel\" (click)=\"onRemove($event)\">\u00D7</button>\n  }\n</span>\n", styles: [":host{display:inline-block}.base-chip{display:inline-flex;align-items:center;gap:.5rem;background-color:var(--base-secondary);color:var(--base-text);border-radius:9999px!important;padding:.4rem 1rem;font-size:.85rem;font-weight:500;border:1px solid var(--base-border);transition:var(--base-transition);-webkit-user-select:none;user-select:none}.base-chip .base-chip-text{font-weight:500}.base-chip .base-chip-close{background:transparent;border:none;cursor:pointer;font-size:1rem;line-height:1;color:currentColor;opacity:.7;padding:0;display:inline-flex;align-items:center;justify-content:center;width:1.25rem;height:1.25rem;border-radius:50%!important;transition:var(--base-transition)}.base-chip .base-chip-close:hover{opacity:1;background-color:#0000001a}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], removable: [{
                type: Input
            }], removeLabel: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], textColor: [{
                type: Input
            }], baseRemove: [{
                type: Output
            }], removed: [{
                type: Output
            }] } });

class BaseCheckbox {
    checked = false;
    disabled = false;
    indeterminate = false;
    label = '';
    baseChange = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseCheckbox, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseCheckbox, isStandalone: true, selector: "base-checkbox", inputs: { checked: "checked", disabled: "disabled", indeterminate: "indeterminate", label: "label" }, outputs: { baseChange: "baseChange" }, ngImport: i0, template: "<label><input type=\"checkbox\" [checked]=\"checked\" [disabled]=\"disabled\" [indeterminate]=\"indeterminate\" [attr.aria-label]=\"label || null\" (change)=\"baseChange.emit($any($event.target).checked)\" /><ng-content />@if(label){<span>{{label}}</span>}</label>\n", styles: [":host{display:inline-block}label{display:inline-flex;align-items:center;gap:.5rem;cursor:pointer;font-weight:500;font-size:.95rem;-webkit-user-select:none;user-select:none;color:var(--base-text)}label input[type=checkbox]{accent-color:var(--base-primary);width:1.125rem;height:1.125rem;border-radius:.25rem;cursor:pointer}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseCheckbox, decorators: [{
            type: Component,
            args: [{ selector: 'base-checkbox', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<label><input type=\"checkbox\" [checked]=\"checked\" [disabled]=\"disabled\" [indeterminate]=\"indeterminate\" [attr.aria-label]=\"label || null\" (change)=\"baseChange.emit($any($event.target).checked)\" /><ng-content />@if(label){<span>{{label}}</span>}</label>\n", styles: [":host{display:inline-block}label{display:inline-flex;align-items:center;gap:.5rem;cursor:pointer;font-weight:500;font-size:.95rem;-webkit-user-select:none;user-select:none;color:var(--base-text)}label input[type=checkbox]{accent-color:var(--base-primary);width:1.125rem;height:1.125rem;border-radius:.25rem;cursor:pointer}\n"] }]
        }], propDecorators: { checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], label: [{
                type: Input
            }], baseChange: [{
                type: Output
            }] } });

class BaseToast {
    variant = 'info';
    message = 'Toast de exemplo!';
    duration = 0; // in ms
    dismissible = true;
    closed = new EventEmitter();
    timer;
    ngOnInit() {
        if (this.duration > 0) {
            this.timer = setTimeout(() => {
                this.closed.emit();
            }, this.duration);
        }
    }
    ngOnDestroy() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseToast, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseToast, isStandalone: true, selector: "base-toast", inputs: { variant: "variant", message: "message", duration: "duration", dismissible: "dismissible" }, outputs: { closed: "closed" }, ngImport: i0, template: "<div class=\"base-toast\" [class]=\"'base-toast base-toast--' + variant\" role=\"status\">\n  <div class=\"base-toast-content\">\n    <span>{{ message }}</span>\n    <ng-content />\n  </div>\n  @if (dismissible) {\n    <button class=\"base-toast-close\" (click)=\"closed.emit()\" aria-label=\"Fechar\">&times;</button>\n  }\n  @if (duration > 0) {\n    <div class=\"base-toast-progress\" [style.animation-duration.ms]=\"duration\"></div>\n  }\n</div>\n", styles: [":host{display:block;position:fixed;bottom:1.5rem;right:1.5rem;z-index:1100}.base-toast{background:#fff;color:#0f172a;padding:1rem 1.25rem;border-radius:.75rem;box-shadow:0 10px 15px -3px #0f172a1a,0 4px 6px -4px #0f172a1a;font-size:.925rem;display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;animation:slideIn .25s cubic-bezier(.4,0,.2,1);border:1px solid #cbd5e1;border-left-width:6px;border-left-style:solid;border-left-color:#4f46e5;min-width:20rem;position:relative;overflow:hidden}.base-toast--success{border-left-color:#10b981!important}.base-toast--success .base-toast-progress{background:#10b981!important}.base-toast--error{border-left-color:#ef4444!important}.base-toast--error .base-toast-progress{background:#ef4444!important}.base-toast--warning{border-left-color:#f59e0b!important}.base-toast--warning .base-toast-progress{background:#f59e0b!important}.base-toast--info{border-left-color:#4f46e5!important}.base-toast--info .base-toast-progress{background:#4f46e5!important}.base-toast .base-toast-content{flex:1;font-weight:500}.base-toast .base-toast-close{background:transparent;border:none;font-size:1.25rem;cursor:pointer;color:#64748b;padding:0;line-height:1;transition:all .2s ease}.base-toast .base-toast-close:hover{color:#0f172a}.base-toast .base-toast-progress{position:absolute;bottom:0;left:0;height:3px;opacity:.9;width:100%;animation:shrink linear forwards}@keyframes slideIn{0%{opacity:0;transform:translateY(1rem)}to{opacity:1;transform:translateY(0)}}@keyframes shrink{0%{width:100%}to{width:0%}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseToast, decorators: [{
            type: Component,
            args: [{ selector: 'base-toast', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"base-toast\" [class]=\"'base-toast base-toast--' + variant\" role=\"status\">\n  <div class=\"base-toast-content\">\n    <span>{{ message }}</span>\n    <ng-content />\n  </div>\n  @if (dismissible) {\n    <button class=\"base-toast-close\" (click)=\"closed.emit()\" aria-label=\"Fechar\">&times;</button>\n  }\n  @if (duration > 0) {\n    <div class=\"base-toast-progress\" [style.animation-duration.ms]=\"duration\"></div>\n  }\n</div>\n", styles: [":host{display:block;position:fixed;bottom:1.5rem;right:1.5rem;z-index:1100}.base-toast{background:#fff;color:#0f172a;padding:1rem 1.25rem;border-radius:.75rem;box-shadow:0 10px 15px -3px #0f172a1a,0 4px 6px -4px #0f172a1a;font-size:.925rem;display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;animation:slideIn .25s cubic-bezier(.4,0,.2,1);border:1px solid #cbd5e1;border-left-width:6px;border-left-style:solid;border-left-color:#4f46e5;min-width:20rem;position:relative;overflow:hidden}.base-toast--success{border-left-color:#10b981!important}.base-toast--success .base-toast-progress{background:#10b981!important}.base-toast--error{border-left-color:#ef4444!important}.base-toast--error .base-toast-progress{background:#ef4444!important}.base-toast--warning{border-left-color:#f59e0b!important}.base-toast--warning .base-toast-progress{background:#f59e0b!important}.base-toast--info{border-left-color:#4f46e5!important}.base-toast--info .base-toast-progress{background:#4f46e5!important}.base-toast .base-toast-content{flex:1;font-weight:500}.base-toast .base-toast-close{background:transparent;border:none;font-size:1.25rem;cursor:pointer;color:#64748b;padding:0;line-height:1;transition:all .2s ease}.base-toast .base-toast-close:hover{color:#0f172a}.base-toast .base-toast-progress{position:absolute;bottom:0;left:0;height:3px;opacity:.9;width:100%;animation:shrink linear forwards}@keyframes slideIn{0%{opacity:0;transform:translateY(1rem)}to{opacity:1;transform:translateY(0)}}@keyframes shrink{0%{width:100%}to{width:0%}}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], message: [{
                type: Input
            }], duration: [{
                type: Input
            }], dismissible: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });

class BaseTooltip {
    content = '';
    id = 'base-tooltip';
    maxLength = 120; // character limit for succinct info
    get truncatedContent() {
        if (!this.content)
            return '';
        if (this.content.length > this.maxLength) {
            return this.content.substring(0, this.maxLength).trim() + '...';
        }
        return this.content;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseTooltip, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: BaseTooltip, isStandalone: true, selector: "base-tooltip", inputs: { content: "content", id: "id", maxLength: "maxLength" }, ngImport: i0, template: "<span class=\"base-tooltip-wrapper\">\n  <span tabindex=\"0\" [attr.aria-describedby]=\"id\"><ng-content /></span>\n  <span class=\"base-tooltip\" [id]=\"id\" role=\"tooltip\">{{ truncatedContent }}</span>\n</span>\n", styles: [":host{position:relative;display:inline-block}.base-tooltip{position:absolute;bottom:calc(100% + .5rem);left:50%;transform:translate(-50%);background:var(--base-text);color:var(--base-bg);padding:.5rem .875rem;border-radius:var(--base-radius);font-size:.825rem;font-weight:400;line-height:1.4;white-space:normal;word-break:break-word;overflow-wrap:break-word;max-width:16rem;text-align:center;box-shadow:var(--base-shadow-md);border:1px solid rgba(255,255,255,.15);z-index:60;pointer-events:none;animation:fadeIn .15s cubic-bezier(.4,0,.2,1)}@keyframes fadeIn{0%{opacity:0;transform:translate(-50%) translateY(4px)}to{opacity:1;transform:translate(-50%) translateY(0)}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseTooltip, decorators: [{
            type: Component,
            args: [{ selector: 'base-tooltip', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"base-tooltip-wrapper\">\n  <span tabindex=\"0\" [attr.aria-describedby]=\"id\"><ng-content /></span>\n  <span class=\"base-tooltip\" [id]=\"id\" role=\"tooltip\">{{ truncatedContent }}</span>\n</span>\n", styles: [":host{position:relative;display:inline-block}.base-tooltip{position:absolute;bottom:calc(100% + .5rem);left:50%;transform:translate(-50%);background:var(--base-text);color:var(--base-bg);padding:.5rem .875rem;border-radius:var(--base-radius);font-size:.825rem;font-weight:400;line-height:1.4;white-space:normal;word-break:break-word;overflow-wrap:break-word;max-width:16rem;text-align:center;box-shadow:var(--base-shadow-md);border:1px solid rgba(255,255,255,.15);z-index:60;pointer-events:none;animation:fadeIn .15s cubic-bezier(.4,0,.2,1)}@keyframes fadeIn{0%{opacity:0;transform:translate(-50%) translateY(4px)}to{opacity:1;transform:translate(-50%) translateY(0)}}\n"] }]
        }], propDecorators: { content: [{
                type: Input
            }], id: [{
                type: Input
            }], maxLength: [{
                type: Input
            }] } });

class BaseLink {
    href = '#';
    target = '_self';
    rel = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseLink, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: BaseLink, isStandalone: true, selector: "base-link", inputs: { href: "href", target: "target", rel: "rel" }, ngImport: i0, template: "<a [href]=\"href\" [target]=\"target\" [rel]=\"rel\"><ng-content /></a>\n", styles: [":host{display:inline-block}.base-link{color:var(--base-primary);text-decoration:none;font-weight:500;transition:var(--base-transition);position:relative}.base-link:hover{color:var(--base-primary-hover);text-decoration:underline}.base-link:focus-visible{outline:none;box-shadow:var(--base-ring);border-radius:.25rem}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseLink, decorators: [{
            type: Component,
            args: [{ selector: 'base-link', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<a [href]=\"href\" [target]=\"target\" [rel]=\"rel\"><ng-content /></a>\n", styles: [":host{display:inline-block}.base-link{color:var(--base-primary);text-decoration:none;font-weight:500;transition:var(--base-transition);position:relative}.base-link:hover{color:var(--base-primary-hover);text-decoration:underline}.base-link:focus-visible{outline:none;box-shadow:var(--base-ring);border-radius:.25rem}\n"] }]
        }], propDecorators: { href: [{
                type: Input
            }], target: [{
                type: Input
            }], rel: [{
                type: Input
            }] } });

class BaseIcon {
    name = 'circle';
    label = '';
    get symbol() { return this.name === 'check' ? '✓' : this.name === 'close' ? '×' : '●'; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseIcon, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseIcon, isStandalone: true, selector: "base-icon", inputs: { name: "name", label: "label" }, ngImport: i0, template: "<span [attr.aria-label]=\"label || null\" [attr.aria-hidden]=\"!label\">@if (name) { {{ symbol }} } @else { <ng-content /> }</span>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseIcon, decorators: [{
            type: Component,
            args: [{ selector: 'base-icon', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<span [attr.aria-label]=\"label || null\" [attr.aria-hidden]=\"!label\">@if (name) { {{ symbol }} } @else { <ng-content /> }</span>\n" }]
        }], propDecorators: { name: [{
                type: Input
            }], label: [{
                type: Input
            }] } });

class BaseTab {
    tabs = [];
    activeId = '';
    tabChange = new EventEmitter();
    selectTab(id) {
        this.activeId = id;
        this.tabChange.emit(id);
    }
    get currentTab() {
        return this.tabs.find(t => t.id === this.activeId) || this.tabs[0];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseTab, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseTab, isStandalone: true, selector: "base-tab", inputs: { tabs: "tabs", activeId: "activeId" }, outputs: { tabChange: "tabChange" }, ngImport: i0, template: "<div class=\"base-tabs\">\n  <div class=\"base-tabs-header\" role=\"tablist\">\n    @for (tab of tabs; track tab.id) {\n      <button \n        role=\"tab\"\n        [id]=\"'tab-' + tab.id\"\n        [attr.aria-selected]=\"(activeId ? activeId === tab.id : tabs[0]?.id === tab.id)\"\n        [class]=\"'base-tab-btn ' + ((activeId ? activeId === tab.id : tabs[0]?.id === tab.id) ? 'active' : '')\"\n        (click)=\"selectTab(tab.id)\">\n        {{ tab.title }}\n      </button>\n    }\n  </div>\n  <div class=\"base-tabs-body\" role=\"tabpanel\">\n    @if (currentTab?.content) {\n      <p>{{ currentTab?.content }}</p>\n    }\n    <ng-content />\n  </div>\n</div>\n", styles: [":host{display:block}.base-tabs{border:1px solid var(--base-border);border-radius:var(--base-radius);background:var(--base-bg);box-shadow:var(--base-shadow-sm);overflow:hidden}.base-tabs .base-tabs-header{display:flex;background:var(--base-surface);border-bottom:1px solid var(--base-border);gap:.25rem;padding:.5rem .5rem 0}.base-tabs .base-tabs-header .base-tab-btn{background:transparent;border:none;padding:.75rem 1.25rem;font-family:inherit;font-size:.9rem;font-weight:500;color:var(--base-text-muted);cursor:pointer;border-top-left-radius:var(--base-radius-sm);border-top-right-radius:var(--base-radius-sm);transition:var(--base-transition)}.base-tabs .base-tabs-header .base-tab-btn:hover{color:var(--base-text);background:#00000005}.base-tabs .base-tabs-header .base-tab-btn.active{color:var(--base-primary);background:var(--base-bg);border-bottom:2px solid var(--base-primary);font-weight:600}.base-tabs .base-tabs-body{padding:1.25rem;color:var(--base-text);font-size:.95rem}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseTab, decorators: [{
            type: Component,
            args: [{ selector: 'base-tab', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"base-tabs\">\n  <div class=\"base-tabs-header\" role=\"tablist\">\n    @for (tab of tabs; track tab.id) {\n      <button \n        role=\"tab\"\n        [id]=\"'tab-' + tab.id\"\n        [attr.aria-selected]=\"(activeId ? activeId === tab.id : tabs[0]?.id === tab.id)\"\n        [class]=\"'base-tab-btn ' + ((activeId ? activeId === tab.id : tabs[0]?.id === tab.id) ? 'active' : '')\"\n        (click)=\"selectTab(tab.id)\">\n        {{ tab.title }}\n      </button>\n    }\n  </div>\n  <div class=\"base-tabs-body\" role=\"tabpanel\">\n    @if (currentTab?.content) {\n      <p>{{ currentTab?.content }}</p>\n    }\n    <ng-content />\n  </div>\n</div>\n", styles: [":host{display:block}.base-tabs{border:1px solid var(--base-border);border-radius:var(--base-radius);background:var(--base-bg);box-shadow:var(--base-shadow-sm);overflow:hidden}.base-tabs .base-tabs-header{display:flex;background:var(--base-surface);border-bottom:1px solid var(--base-border);gap:.25rem;padding:.5rem .5rem 0}.base-tabs .base-tabs-header .base-tab-btn{background:transparent;border:none;padding:.75rem 1.25rem;font-family:inherit;font-size:.9rem;font-weight:500;color:var(--base-text-muted);cursor:pointer;border-top-left-radius:var(--base-radius-sm);border-top-right-radius:var(--base-radius-sm);transition:var(--base-transition)}.base-tabs .base-tabs-header .base-tab-btn:hover{color:var(--base-text);background:#00000005}.base-tabs .base-tabs-header .base-tab-btn.active{color:var(--base-primary);background:var(--base-bg);border-bottom:2px solid var(--base-primary);font-weight:600}.base-tabs .base-tabs-body{padding:1.25rem;color:var(--base-text);font-size:.95rem}\n"] }]
        }], propDecorators: { tabs: [{
                type: Input
            }], activeId: [{
                type: Input
            }], tabChange: [{
                type: Output
            }] } });

class BaseToggle {
    checked = false;
    disabled = false;
    label = '';
    checkedChange = new EventEmitter();
    toggle() {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.checkedChange.emit(this.checked);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseToggle, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseToggle, isStandalone: true, selector: "base-toggle", inputs: { checked: "checked", disabled: "disabled", label: "label" }, outputs: { checkedChange: "checkedChange" }, ngImport: i0, template: "<label class=\"base-toggle-wrapper\" [class.disabled]=\"disabled\">\n  <button \n    type=\"button\" \n    role=\"switch\" \n    [attr.aria-checked]=\"checked\" \n    [disabled]=\"disabled\"\n    [class]=\"'base-toggle ' + (checked ? 'checked' : '')\"\n    (click)=\"toggle()\">\n    <span class=\"base-toggle-thumb\"></span>\n  </button>\n  @if (label) {\n    <span class=\"base-toggle-label\">{{ label }}</span>\n  }\n</label>\n", styles: [":host{display:inline-block}.base-toggle-wrapper{display:inline-flex;align-items:center;gap:.75rem;cursor:pointer;-webkit-user-select:none;user-select:none}.base-toggle-wrapper.disabled{cursor:not-allowed;opacity:.6}.base-toggle-wrapper .base-toggle{position:relative;width:2.75rem;height:1.5rem;background-color:var(--base-border);border:none;border-radius:9999px;cursor:pointer;transition:var(--base-transition);padding:0}.base-toggle-wrapper .base-toggle .base-toggle-thumb{position:absolute;top:.125rem;left:.125rem;width:1.25rem;height:1.25rem;background-color:#fff;border-radius:50%;box-shadow:var(--base-shadow-sm);transition:transform .2s cubic-bezier(.4,0,.2,1)}.base-toggle-wrapper .base-toggle.checked{background-color:var(--base-primary)}.base-toggle-wrapper .base-toggle.checked .base-toggle-thumb{transform:translate(1.25rem)}.base-toggle-wrapper .base-toggle:focus-visible{outline:none;box-shadow:var(--base-ring)}.base-toggle-wrapper .base-toggle-label{font-size:.95rem;font-weight:500;color:var(--base-text)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseToggle, decorators: [{
            type: Component,
            args: [{ selector: 'base-toggle', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<label class=\"base-toggle-wrapper\" [class.disabled]=\"disabled\">\n  <button \n    type=\"button\" \n    role=\"switch\" \n    [attr.aria-checked]=\"checked\" \n    [disabled]=\"disabled\"\n    [class]=\"'base-toggle ' + (checked ? 'checked' : '')\"\n    (click)=\"toggle()\">\n    <span class=\"base-toggle-thumb\"></span>\n  </button>\n  @if (label) {\n    <span class=\"base-toggle-label\">{{ label }}</span>\n  }\n</label>\n", styles: [":host{display:inline-block}.base-toggle-wrapper{display:inline-flex;align-items:center;gap:.75rem;cursor:pointer;-webkit-user-select:none;user-select:none}.base-toggle-wrapper.disabled{cursor:not-allowed;opacity:.6}.base-toggle-wrapper .base-toggle{position:relative;width:2.75rem;height:1.5rem;background-color:var(--base-border);border:none;border-radius:9999px;cursor:pointer;transition:var(--base-transition);padding:0}.base-toggle-wrapper .base-toggle .base-toggle-thumb{position:absolute;top:.125rem;left:.125rem;width:1.25rem;height:1.25rem;background-color:#fff;border-radius:50%;box-shadow:var(--base-shadow-sm);transition:transform .2s cubic-bezier(.4,0,.2,1)}.base-toggle-wrapper .base-toggle.checked{background-color:var(--base-primary)}.base-toggle-wrapper .base-toggle.checked .base-toggle-thumb{transform:translate(1.25rem)}.base-toggle-wrapper .base-toggle:focus-visible{outline:none;box-shadow:var(--base-ring)}.base-toggle-wrapper .base-toggle-label{font-size:.95rem;font-weight:500;color:var(--base-text)}\n"] }]
        }], propDecorators: { checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }] } });

class BaseTitle {
    level = 'h2';
    text = '';
    variant = 'default';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseTitle, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseTitle, isStandalone: true, selector: "base-title", inputs: { level: "level", text: "text", variant: "variant" }, ngImport: i0, template: "@switch (level) {\n  @case ('h1') { <h1 [class]=\"'base-title base-title--' + variant\">{{ text }}<ng-content /></h1> }\n  @case ('h2') { <h2 [class]=\"'base-title base-title--' + variant\">{{ text }}<ng-content /></h2> }\n  @case ('h3') { <h3 [class]=\"'base-title base-title--' + variant\">{{ text }}<ng-content /></h3> }\n  @case ('h4') { <h4 [class]=\"'base-title base-title--' + variant\">{{ text }}<ng-content /></h4> }\n  @case ('h5') { <h5 [class]=\"'base-title base-title--' + variant\">{{ text }}<ng-content /></h5> }\n  @default { <h6 [class]=\"'base-title base-title--' + variant\">{{ text }}<ng-content /></h6> }\n}\n", styles: [":host{display:block}.base-title{font-family:var(--base-font-sans);margin:0;font-weight:700;color:var(--base-text);letter-spacing:-.025em}.base-title--default{color:var(--base-text)}.base-title--gradient{background:linear-gradient(135deg,var(--base-primary) 0%,#ec4899 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.base-title--muted{color:var(--base-text-muted);font-weight:500}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseTitle, decorators: [{
            type: Component,
            args: [{ selector: 'base-title', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "@switch (level) {\n  @case ('h1') { <h1 [class]=\"'base-title base-title--' + variant\">{{ text }}<ng-content /></h1> }\n  @case ('h2') { <h2 [class]=\"'base-title base-title--' + variant\">{{ text }}<ng-content /></h2> }\n  @case ('h3') { <h3 [class]=\"'base-title base-title--' + variant\">{{ text }}<ng-content /></h3> }\n  @case ('h4') { <h4 [class]=\"'base-title base-title--' + variant\">{{ text }}<ng-content /></h4> }\n  @case ('h5') { <h5 [class]=\"'base-title base-title--' + variant\">{{ text }}<ng-content /></h5> }\n  @default { <h6 [class]=\"'base-title base-title--' + variant\">{{ text }}<ng-content /></h6> }\n}\n", styles: [":host{display:block}.base-title{font-family:var(--base-font-sans);margin:0;font-weight:700;color:var(--base-text);letter-spacing:-.025em}.base-title--default{color:var(--base-text)}.base-title--gradient{background:linear-gradient(135deg,var(--base-primary) 0%,#ec4899 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.base-title--muted{color:var(--base-text-muted);font-weight:500}\n"] }]
        }], propDecorators: { level: [{
                type: Input
            }], text: [{
                type: Input
            }], variant: [{
                type: Input
            }] } });

class BaseCard {
    title = '';
    imageUrl = '';
    clickable = false;
    cardClick = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseCard, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseCard, isStandalone: true, selector: "base-card", inputs: { title: "title", imageUrl: "imageUrl", clickable: "clickable" }, outputs: { cardClick: "cardClick" }, ngImport: i0, template: "<div \n  class=\"base-card\" \n  [class.clickable]=\"clickable\"\n  (click)=\"clickable && cardClick.emit($event)\">\n  @if (imageUrl) {\n    <div class=\"base-card-image\">\n      <img [src]=\"imageUrl\" [alt]=\"title || 'Card image'\" />\n    </div>\n  }\n  @if (title) {\n    <div class=\"base-card-header\">\n      <h3>{{ title }}</h3>\n    </div>\n  }\n  <div class=\"base-card-body\">\n    <ng-content />\n  </div>\n</div>\n", styles: [":host{display:block}.base-card{background:var(--base-bg);border:1px solid var(--base-border);border-radius:var(--base-radius);box-shadow:var(--base-shadow);overflow:hidden;transition:var(--base-transition)}.base-card.clickable{cursor:pointer}.base-card.clickable:hover{transform:translateY(-2px);box-shadow:var(--base-shadow-md);border-color:var(--base-primary)}.base-card .base-card-image{width:100%;height:12rem;overflow:hidden;background:var(--base-surface)}.base-card .base-card-image img{width:100%;height:100%;object-fit:cover;transition:transform .3s ease}.base-card:hover .base-card-image img{transform:scale(1.03)}.base-card .base-card-header{padding:1.25rem 1.25rem .5rem}.base-card .base-card-header h3{font-size:1.1rem;font-weight:600;color:var(--base-text);margin:0}.base-card .base-card-body{padding:1.25rem;color:var(--base-text-muted);font-size:.925rem;line-height:1.5}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseCard, decorators: [{
            type: Component,
            args: [{ selector: 'base-card', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \n  class=\"base-card\" \n  [class.clickable]=\"clickable\"\n  (click)=\"clickable && cardClick.emit($event)\">\n  @if (imageUrl) {\n    <div class=\"base-card-image\">\n      <img [src]=\"imageUrl\" [alt]=\"title || 'Card image'\" />\n    </div>\n  }\n  @if (title) {\n    <div class=\"base-card-header\">\n      <h3>{{ title }}</h3>\n    </div>\n  }\n  <div class=\"base-card-body\">\n    <ng-content />\n  </div>\n</div>\n", styles: [":host{display:block}.base-card{background:var(--base-bg);border:1px solid var(--base-border);border-radius:var(--base-radius);box-shadow:var(--base-shadow);overflow:hidden;transition:var(--base-transition)}.base-card.clickable{cursor:pointer}.base-card.clickable:hover{transform:translateY(-2px);box-shadow:var(--base-shadow-md);border-color:var(--base-primary)}.base-card .base-card-image{width:100%;height:12rem;overflow:hidden;background:var(--base-surface)}.base-card .base-card-image img{width:100%;height:100%;object-fit:cover;transition:transform .3s ease}.base-card:hover .base-card-image img{transform:scale(1.03)}.base-card .base-card-header{padding:1.25rem 1.25rem .5rem}.base-card .base-card-header h3{font-size:1.1rem;font-weight:600;color:var(--base-text);margin:0}.base-card .base-card-body{padding:1.25rem;color:var(--base-text-muted);font-size:.925rem;line-height:1.5}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], imageUrl: [{
                type: Input
            }], clickable: [{
                type: Input
            }], cardClick: [{
                type: Output
            }] } });

class BaseGrid {
    columns = 3;
    gap = '1.5rem';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseGrid, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: BaseGrid, isStandalone: true, selector: "base-grid", inputs: { columns: "columns", gap: "gap" }, ngImport: i0, template: "<div class=\"base-grid\" [style.--grid-cols]=\"columns\" [style.--grid-gap]=\"gap\">\n  <ng-content />\n</div>\n", styles: [":host{display:block;width:100%}.base-grid{display:grid;grid-template-columns:repeat(var(--grid-cols, 3),minmax(0,1fr));gap:var(--grid-gap, 1.5rem)}.base-grid>*{border-radius:var(--base-radius);box-shadow:var(--base-shadow-sm);transition:transform .25s cubic-bezier(.4,0,.2,1),box-shadow .25s cubic-bezier(.4,0,.2,1)}.base-grid>*:hover{transform:translateY(-4px);box-shadow:var(--base-shadow-lg)}@media(max-width:768px){.base-grid{grid-template-columns:repeat(1,minmax(0,1fr))!important}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseGrid, decorators: [{
            type: Component,
            args: [{ selector: 'base-grid', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"base-grid\" [style.--grid-cols]=\"columns\" [style.--grid-gap]=\"gap\">\n  <ng-content />\n</div>\n", styles: [":host{display:block;width:100%}.base-grid{display:grid;grid-template-columns:repeat(var(--grid-cols, 3),minmax(0,1fr));gap:var(--grid-gap, 1.5rem)}.base-grid>*{border-radius:var(--base-radius);box-shadow:var(--base-shadow-sm);transition:transform .25s cubic-bezier(.4,0,.2,1),box-shadow .25s cubic-bezier(.4,0,.2,1)}.base-grid>*:hover{transform:translateY(-4px);box-shadow:var(--base-shadow-lg)}@media(max-width:768px){.base-grid{grid-template-columns:repeat(1,minmax(0,1fr))!important}}\n"] }]
        }], propDecorators: { columns: [{
                type: Input
            }], gap: [{
                type: Input
            }] } });

class BaseCarousel {
    items = [];
    autoplay = true; // Enabled by default
    interval = 5000; // 5 seconds default interval
    itemSelected = new EventEmitter();
    itemClicked = new EventEmitter();
    currentIndex = 0;
    timer;
    cdr = inject(ChangeDetectorRef);
    ngOnInit() {
        if (this.autoplay && this.items.length > 1) {
            this.startAutoplay();
        }
    }
    ngOnDestroy() {
        this.stopAutoplay();
    }
    startAutoplay() {
        this.stopAutoplay();
        this.timer = setInterval(() => {
            this.next();
        }, this.interval);
    }
    stopAutoplay() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    next() {
        if (!this.items.length)
            return;
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.itemSelected.emit(this.items[this.currentIndex]);
        this.cdr.markForCheck();
    }
    prev() {
        if (!this.items.length)
            return;
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.itemSelected.emit(this.items[this.currentIndex]);
        this.cdr.markForCheck();
    }
    goTo(index) {
        if (index >= 0 && index < this.items.length) {
            this.currentIndex = index;
            this.itemSelected.emit(this.items[this.currentIndex]);
            this.cdr.markForCheck();
        }
    }
    onSlideClick(item) {
        if (item) {
            this.itemClicked.emit(item);
            if (item.linkUrl) {
                window.open(item.linkUrl, '_blank');
            }
        }
    }
    get currentItem() {
        return this.items[this.currentIndex];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseCarousel, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseCarousel, isStandalone: true, selector: "base-carousel", inputs: { items: "items", autoplay: "autoplay", interval: "interval" }, outputs: { itemSelected: "itemSelected", itemClicked: "itemClicked" }, ngImport: i0, template: "<div class=\"base-carousel\" (mouseenter)=\"stopAutoplay()\" (mouseleave)=\"autoplay && startAutoplay()\">\n  <div class=\"base-carousel-track\">\n    @if (currentItem) {\n      <div \n        class=\"base-carousel-slide\" \n        [class.clickable]=\"currentItem.linkUrl\" \n        (click)=\"onSlideClick(currentItem)\">\n        @if (currentItem.imageUrl) {\n          <img [src]=\"currentItem.imageUrl\" [alt]=\"currentItem.title || 'Carousel image'\" />\n        }\n        @if (currentItem.title || currentItem.content) {\n          <div class=\"base-carousel-caption\">\n            @if (currentItem.title) {\n              <h4>{{ currentItem.title }}</h4>\n            }\n            @if (currentItem.content) {\n              <p>{{ currentItem.content }}</p>\n            }\n          </div>\n        }\n      </div>\n    }\n    <ng-content />\n  </div>\n\n  @if (items.length > 1) {\n    <button class=\"base-carousel-arrow prev\" (click)=\"prev()\" aria-label=\"Anterior\">&lsaquo;</button>\n    <button class=\"base-carousel-arrow next\" (click)=\"next()\" aria-label=\"Pr\u00F3ximo\">&rsaquo;</button>\n\n    <div class=\"base-carousel-indicators\">\n      @for (item of items; track item.id; let i = $index) {\n        <button \n          [class.active]=\"i === currentIndex\" \n          (click)=\"goTo(i)\" \n          [attr.aria-label]=\"'Slide ' + (i + 1)\">\n        </button>\n      }\n    </div>\n  }\n</div>\n", styles: [":host{display:block}.base-carousel{position:relative;overflow:hidden;border-radius:var(--base-radius);border:1px solid var(--base-border);background:var(--base-surface);box-shadow:var(--base-shadow)}.base-carousel .base-carousel-track{position:relative;min-height:18rem;display:flex;align-items:center;justify-content:center}.base-carousel .base-carousel-track .base-carousel-slide{width:100%;height:100%;position:absolute;inset:0;display:flex;flex-direction:column}.base-carousel .base-carousel-track .base-carousel-slide.clickable{cursor:pointer;transition:opacity .2s ease}.base-carousel .base-carousel-track .base-carousel-slide.clickable:hover{opacity:.95}.base-carousel .base-carousel-track .base-carousel-slide img{width:100%;height:13rem;object-fit:cover}.base-carousel .base-carousel-track .base-carousel-slide .base-carousel-caption{padding:1rem 1.25rem;background:var(--base-bg);border-top:1px solid var(--base-border);flex:1}.base-carousel .base-carousel-track .base-carousel-slide .base-carousel-caption h4{font-size:1rem;font-weight:600;color:var(--base-text);margin:0 0 .25rem}.base-carousel .base-carousel-track .base-carousel-slide .base-carousel-caption p{font-size:.875rem;color:var(--base-text-muted);margin:0}.base-carousel .base-carousel-arrow{position:absolute;top:40%;transform:translateY(-50%);background:#0f172a99;color:#fff;border:none;width:2.5rem;height:2.5rem;border-radius:50%;font-size:1.5rem;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:var(--base-transition);z-index:10}.base-carousel .base-carousel-arrow:hover{background:#0f172ae6}.base-carousel .base-carousel-arrow.prev{left:.75rem}.base-carousel .base-carousel-arrow.next{right:.75rem}.base-carousel .base-carousel-indicators{position:absolute;bottom:5.5rem;left:50%;transform:translate(-50%);display:flex;gap:.375rem;z-index:10}.base-carousel .base-carousel-indicators button{width:.5rem;height:.5rem;border-radius:50%;border:none;background:#fff9;cursor:pointer;transition:var(--base-transition);padding:0;box-shadow:0 1px 2px #0000004d}.base-carousel .base-carousel-indicators button.active{width:1.25rem;border-radius:9999px;background:#fff}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseCarousel, decorators: [{
            type: Component,
            args: [{ selector: 'base-carousel', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"base-carousel\" (mouseenter)=\"stopAutoplay()\" (mouseleave)=\"autoplay && startAutoplay()\">\n  <div class=\"base-carousel-track\">\n    @if (currentItem) {\n      <div \n        class=\"base-carousel-slide\" \n        [class.clickable]=\"currentItem.linkUrl\" \n        (click)=\"onSlideClick(currentItem)\">\n        @if (currentItem.imageUrl) {\n          <img [src]=\"currentItem.imageUrl\" [alt]=\"currentItem.title || 'Carousel image'\" />\n        }\n        @if (currentItem.title || currentItem.content) {\n          <div class=\"base-carousel-caption\">\n            @if (currentItem.title) {\n              <h4>{{ currentItem.title }}</h4>\n            }\n            @if (currentItem.content) {\n              <p>{{ currentItem.content }}</p>\n            }\n          </div>\n        }\n      </div>\n    }\n    <ng-content />\n  </div>\n\n  @if (items.length > 1) {\n    <button class=\"base-carousel-arrow prev\" (click)=\"prev()\" aria-label=\"Anterior\">&lsaquo;</button>\n    <button class=\"base-carousel-arrow next\" (click)=\"next()\" aria-label=\"Pr\u00F3ximo\">&rsaquo;</button>\n\n    <div class=\"base-carousel-indicators\">\n      @for (item of items; track item.id; let i = $index) {\n        <button \n          [class.active]=\"i === currentIndex\" \n          (click)=\"goTo(i)\" \n          [attr.aria-label]=\"'Slide ' + (i + 1)\">\n        </button>\n      }\n    </div>\n  }\n</div>\n", styles: [":host{display:block}.base-carousel{position:relative;overflow:hidden;border-radius:var(--base-radius);border:1px solid var(--base-border);background:var(--base-surface);box-shadow:var(--base-shadow)}.base-carousel .base-carousel-track{position:relative;min-height:18rem;display:flex;align-items:center;justify-content:center}.base-carousel .base-carousel-track .base-carousel-slide{width:100%;height:100%;position:absolute;inset:0;display:flex;flex-direction:column}.base-carousel .base-carousel-track .base-carousel-slide.clickable{cursor:pointer;transition:opacity .2s ease}.base-carousel .base-carousel-track .base-carousel-slide.clickable:hover{opacity:.95}.base-carousel .base-carousel-track .base-carousel-slide img{width:100%;height:13rem;object-fit:cover}.base-carousel .base-carousel-track .base-carousel-slide .base-carousel-caption{padding:1rem 1.25rem;background:var(--base-bg);border-top:1px solid var(--base-border);flex:1}.base-carousel .base-carousel-track .base-carousel-slide .base-carousel-caption h4{font-size:1rem;font-weight:600;color:var(--base-text);margin:0 0 .25rem}.base-carousel .base-carousel-track .base-carousel-slide .base-carousel-caption p{font-size:.875rem;color:var(--base-text-muted);margin:0}.base-carousel .base-carousel-arrow{position:absolute;top:40%;transform:translateY(-50%);background:#0f172a99;color:#fff;border:none;width:2.5rem;height:2.5rem;border-radius:50%;font-size:1.5rem;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:var(--base-transition);z-index:10}.base-carousel .base-carousel-arrow:hover{background:#0f172ae6}.base-carousel .base-carousel-arrow.prev{left:.75rem}.base-carousel .base-carousel-arrow.next{right:.75rem}.base-carousel .base-carousel-indicators{position:absolute;bottom:5.5rem;left:50%;transform:translate(-50%);display:flex;gap:.375rem;z-index:10}.base-carousel .base-carousel-indicators button{width:.5rem;height:.5rem;border-radius:50%;border:none;background:#fff9;cursor:pointer;transition:var(--base-transition);padding:0;box-shadow:0 1px 2px #0000004d}.base-carousel .base-carousel-indicators button.active{width:1.25rem;border-radius:9999px;background:#fff}\n"] }]
        }], propDecorators: { items: [{
                type: Input
            }], autoplay: [{
                type: Input
            }], interval: [{
                type: Input
            }], itemSelected: [{
                type: Output
            }], itemClicked: [{
                type: Output
            }] } });

class BasePagination {
    currentPage = 1;
    totalItems = 0;
    pageSize = 10;
    pageSizeOptions = [5, 10, 20, 50];
    showPageSizeOptions = true;
    siblingCount = 1;
    pageChange = new EventEmitter();
    pageSizeChange = new EventEmitter();
    Math = Math;
    get totalPages() {
        if (this.pageSize <= 0 || this.totalItems <= 0)
            return 1;
        return Math.ceil(this.totalItems / this.pageSize);
    }
    get pages() {
        const total = this.totalPages;
        const current = this.currentPage;
        const siblings = this.siblingCount;
        const totalNumbers = siblings * 2 + 5;
        if (total <= totalNumbers) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }
        const leftSiblingIndex = Math.max(current - siblings, 1);
        const rightSiblingIndex = Math.min(current + siblings, total);
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < total - 1;
        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblings;
            const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
            return [...leftRange, '...', total];
        }
        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblings;
            const rightRange = Array.from({ length: rightItemCount }, (_, i) => total - rightItemCount + i + 1);
            return [1, '...', ...rightRange];
        }
        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);
            return [1, '...', ...middleRange, '...', total];
        }
        return [];
    }
    goToPage(page) {
        if (typeof page !== 'number')
            return;
        if (page < 1 || page > this.totalPages || page === this.currentPage)
            return;
        this.pageChange.emit(page);
    }
    onPageSizeChange(event) {
        const target = event.target;
        const newSize = Number(target.value);
        this.pageSizeChange.emit(newSize);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BasePagination, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BasePagination, isStandalone: true, selector: "base-pagination", inputs: { currentPage: "currentPage", totalItems: "totalItems", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", showPageSizeOptions: "showPageSizeOptions", siblingCount: "siblingCount" }, outputs: { pageChange: "pageChange", pageSizeChange: "pageSizeChange" }, ngImport: i0, template: "<nav class=\"base-pagination\" aria-label=\"Navega\u00E7\u00E3o de p\u00E1gina\">\n  <div class=\"base-pagination-info\" *ngIf=\"totalItems > 0\">\n    Mostrando \n    <span class=\"base-pagination-highlight\">{{ ((currentPage - 1) * pageSize) + 1 }}</span>\n    a\n    <span class=\"base-pagination-highlight\">{{ Math.min(currentPage * pageSize, totalItems) }}</span>\n    de\n    <span class=\"base-pagination-highlight\">{{ totalItems }}</span>\n    resultados\n  </div>\n\n  <div class=\"base-pagination-controls\">\n    <!-- Primeira p\u00E1gina -->\n    <button\n      type=\"button\"\n      class=\"base-pagination-btn base-pagination-edge\"\n      [disabled]=\"currentPage === 1\"\n      (click)=\"goToPage(1)\"\n      aria-label=\"Ir para primeira p\u00E1gina\">\n      \u00AB\u00AB\n    </button>\n\n    <!-- P\u00E1gina anterior -->\n    <button\n      type=\"button\"\n      class=\"base-pagination-btn base-pagination-nav\"\n      [disabled]=\"currentPage === 1\"\n      (click)=\"goToPage(currentPage - 1)\"\n      aria-label=\"P\u00E1gina anterior\">\n      \u2039 Anterior\n    </button>\n\n    <!-- N\u00FAmeros das p\u00E1ginas -->\n    <div class=\"base-pagination-pages\">\n      <ng-container *ngFor=\"let page of pages\">\n        @if (page === '...') {\n          <span class=\"base-pagination-dots\" aria-hidden=\"true\">\u2026</span>\n        } @else {\n          <button\n            type=\"button\"\n            class=\"base-pagination-number\"\n            [class.active]=\"page === currentPage\"\n            [attr.aria-current]=\"page === currentPage ? 'page' : null\"\n            (click)=\"goToPage(page)\">\n            {{ page }}\n          </button>\n        }\n      </ng-container>\n    </div>\n\n    <!-- Pr\u00F3xima p\u00E1gina -->\n    <button\n      type=\"button\"\n      class=\"base-pagination-btn base-pagination-nav\"\n      [disabled]=\"currentPage === totalPages || totalPages === 0\"\n      (click)=\"goToPage(currentPage + 1)\"\n      aria-label=\"Pr\u00F3xima p\u00E1gina\">\n      Pr\u00F3xima \u203A\n    </button>\n\n    <!-- \u00DAltima p\u00E1gina -->\n    <button\n      type=\"button\"\n      class=\"base-pagination-btn base-pagination-edge\"\n      [disabled]=\"currentPage === totalPages || totalPages === 0\"\n      (click)=\"goToPage(totalPages)\"\n      aria-label=\"Ir para \u00FAltima p\u00E1gina\">\n      \u00BB\u00BB\n    </button>\n  </div>\n\n  <!-- Seletor de itens por p\u00E1gina -->\n  <div class=\"base-pagination-size\" *ngIf=\"showPageSizeOptions && pageSizeOptions.length > 0\">\n    <label for=\"base-page-size-select\">Itens por p\u00E1gina:</label>\n    <select\n      id=\"base-page-size-select\"\n      class=\"base-pagination-select\"\n      [value]=\"pageSize\"\n      (change)=\"onPageSizeChange($event)\">\n      <option *ngFor=\"let option of pageSizeOptions\" [value]=\"option\">\n        {{ option }}\n      </option>\n    </select>\n  </div>\n</nav>\n", styles: [".base-pagination{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;font-family:var(--base-font-family, inherit);font-size:.875rem;color:var(--base-text-color, #334155);padding:.75rem 0}.base-pagination-info{color:var(--base-text-muted, #64748b)}.base-pagination-highlight{font-weight:600;color:var(--base-text-color, #0f172a)}.base-pagination-controls{display:flex;align-items:center;gap:.375rem}.base-pagination-pages{display:flex;align-items:center;gap:.25rem}.base-pagination-btn,.base-pagination-number{display:inline-flex;align-items:center;justify-content:center;min-width:2rem;height:2rem;padding:0 .5rem;border:1px solid var(--base-border-color, #cbd5e1);background-color:var(--base-bg-color, #ffffff);color:var(--base-text-color, #334155);border-radius:var(--base-border-radius, .375rem);font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s ease}.base-pagination-btn:hover:not(:disabled),.base-pagination-number:hover:not(:disabled){background-color:var(--base-hover-bg, #f1f5f9);border-color:var(--base-hover-border, #94a3b8);color:var(--base-hover-color, #0f172a)}.base-pagination-btn:focus-visible,.base-pagination-number:focus-visible{outline:2px solid var(--base-focus-ring, #3b82f6);outline-offset:2px}.base-pagination-btn:disabled,.base-pagination-number:disabled{opacity:.5;cursor:not-allowed;background-color:var(--base-disabled-bg, #f8fafc)}.base-pagination-number.active{background-color:var(--base-primary-color, #2563eb);border-color:var(--base-primary-color, #2563eb);color:#fff;font-weight:600}.base-pagination-number.active:hover{background-color:var(--base-primary-hover, #1d4ed8);border-color:var(--base-primary-hover, #1d4ed8)}.base-pagination-dots{display:inline-flex;align-items:center;justify-content:center;min-width:1.5rem;height:2rem;color:var(--base-text-muted, #94a3b8);font-weight:600}.base-pagination-size{display:flex;align-items:center;gap:.5rem;color:var(--base-text-muted, #64748b)}.base-pagination-select{padding:.25rem .5rem;border:1px solid var(--base-border-color, #cbd5e1);border-radius:var(--base-border-radius, .375rem);background-color:var(--base-bg-color, #ffffff);color:var(--base-text-color, #334155);font-size:.875rem;cursor:pointer}.base-pagination-select:focus{outline:2px solid var(--base-focus-ring, #3b82f6)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BasePagination, decorators: [{
            type: Component,
            args: [{ selector: 'base-pagination', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<nav class=\"base-pagination\" aria-label=\"Navega\u00E7\u00E3o de p\u00E1gina\">\n  <div class=\"base-pagination-info\" *ngIf=\"totalItems > 0\">\n    Mostrando \n    <span class=\"base-pagination-highlight\">{{ ((currentPage - 1) * pageSize) + 1 }}</span>\n    a\n    <span class=\"base-pagination-highlight\">{{ Math.min(currentPage * pageSize, totalItems) }}</span>\n    de\n    <span class=\"base-pagination-highlight\">{{ totalItems }}</span>\n    resultados\n  </div>\n\n  <div class=\"base-pagination-controls\">\n    <!-- Primeira p\u00E1gina -->\n    <button\n      type=\"button\"\n      class=\"base-pagination-btn base-pagination-edge\"\n      [disabled]=\"currentPage === 1\"\n      (click)=\"goToPage(1)\"\n      aria-label=\"Ir para primeira p\u00E1gina\">\n      \u00AB\u00AB\n    </button>\n\n    <!-- P\u00E1gina anterior -->\n    <button\n      type=\"button\"\n      class=\"base-pagination-btn base-pagination-nav\"\n      [disabled]=\"currentPage === 1\"\n      (click)=\"goToPage(currentPage - 1)\"\n      aria-label=\"P\u00E1gina anterior\">\n      \u2039 Anterior\n    </button>\n\n    <!-- N\u00FAmeros das p\u00E1ginas -->\n    <div class=\"base-pagination-pages\">\n      <ng-container *ngFor=\"let page of pages\">\n        @if (page === '...') {\n          <span class=\"base-pagination-dots\" aria-hidden=\"true\">\u2026</span>\n        } @else {\n          <button\n            type=\"button\"\n            class=\"base-pagination-number\"\n            [class.active]=\"page === currentPage\"\n            [attr.aria-current]=\"page === currentPage ? 'page' : null\"\n            (click)=\"goToPage(page)\">\n            {{ page }}\n          </button>\n        }\n      </ng-container>\n    </div>\n\n    <!-- Pr\u00F3xima p\u00E1gina -->\n    <button\n      type=\"button\"\n      class=\"base-pagination-btn base-pagination-nav\"\n      [disabled]=\"currentPage === totalPages || totalPages === 0\"\n      (click)=\"goToPage(currentPage + 1)\"\n      aria-label=\"Pr\u00F3xima p\u00E1gina\">\n      Pr\u00F3xima \u203A\n    </button>\n\n    <!-- \u00DAltima p\u00E1gina -->\n    <button\n      type=\"button\"\n      class=\"base-pagination-btn base-pagination-edge\"\n      [disabled]=\"currentPage === totalPages || totalPages === 0\"\n      (click)=\"goToPage(totalPages)\"\n      aria-label=\"Ir para \u00FAltima p\u00E1gina\">\n      \u00BB\u00BB\n    </button>\n  </div>\n\n  <!-- Seletor de itens por p\u00E1gina -->\n  <div class=\"base-pagination-size\" *ngIf=\"showPageSizeOptions && pageSizeOptions.length > 0\">\n    <label for=\"base-page-size-select\">Itens por p\u00E1gina:</label>\n    <select\n      id=\"base-page-size-select\"\n      class=\"base-pagination-select\"\n      [value]=\"pageSize\"\n      (change)=\"onPageSizeChange($event)\">\n      <option *ngFor=\"let option of pageSizeOptions\" [value]=\"option\">\n        {{ option }}\n      </option>\n    </select>\n  </div>\n</nav>\n", styles: [".base-pagination{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;font-family:var(--base-font-family, inherit);font-size:.875rem;color:var(--base-text-color, #334155);padding:.75rem 0}.base-pagination-info{color:var(--base-text-muted, #64748b)}.base-pagination-highlight{font-weight:600;color:var(--base-text-color, #0f172a)}.base-pagination-controls{display:flex;align-items:center;gap:.375rem}.base-pagination-pages{display:flex;align-items:center;gap:.25rem}.base-pagination-btn,.base-pagination-number{display:inline-flex;align-items:center;justify-content:center;min-width:2rem;height:2rem;padding:0 .5rem;border:1px solid var(--base-border-color, #cbd5e1);background-color:var(--base-bg-color, #ffffff);color:var(--base-text-color, #334155);border-radius:var(--base-border-radius, .375rem);font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s ease}.base-pagination-btn:hover:not(:disabled),.base-pagination-number:hover:not(:disabled){background-color:var(--base-hover-bg, #f1f5f9);border-color:var(--base-hover-border, #94a3b8);color:var(--base-hover-color, #0f172a)}.base-pagination-btn:focus-visible,.base-pagination-number:focus-visible{outline:2px solid var(--base-focus-ring, #3b82f6);outline-offset:2px}.base-pagination-btn:disabled,.base-pagination-number:disabled{opacity:.5;cursor:not-allowed;background-color:var(--base-disabled-bg, #f8fafc)}.base-pagination-number.active{background-color:var(--base-primary-color, #2563eb);border-color:var(--base-primary-color, #2563eb);color:#fff;font-weight:600}.base-pagination-number.active:hover{background-color:var(--base-primary-hover, #1d4ed8);border-color:var(--base-primary-hover, #1d4ed8)}.base-pagination-dots{display:inline-flex;align-items:center;justify-content:center;min-width:1.5rem;height:2rem;color:var(--base-text-muted, #94a3b8);font-weight:600}.base-pagination-size{display:flex;align-items:center;gap:.5rem;color:var(--base-text-muted, #64748b)}.base-pagination-select{padding:.25rem .5rem;border:1px solid var(--base-border-color, #cbd5e1);border-radius:var(--base-border-radius, .375rem);background-color:var(--base-bg-color, #ffffff);color:var(--base-text-color, #334155);font-size:.875rem;cursor:pointer}.base-pagination-select:focus{outline:2px solid var(--base-focus-ring, #3b82f6)}\n"] }]
        }], propDecorators: { currentPage: [{
                type: Input
            }], totalItems: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], pageSizeOptions: [{
                type: Input
            }], showPageSizeOptions: [{
                type: Input
            }], siblingCount: [{
                type: Input
            }], pageChange: [{
                type: Output
            }], pageSizeChange: [{
                type: Output
            }] } });

class BaseSkeleton {
    variant = 'text';
    width = '';
    height = '';
    borderRadius = '';
    animation = 'shimmer';
    ariaLabel = 'Carregando conteúdo...';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseSkeleton, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: BaseSkeleton, isStandalone: true, selector: "base-skeleton", inputs: { variant: "variant", width: "width", height: "height", borderRadius: "borderRadius", animation: "animation", ariaLabel: "ariaLabel" }, ngImport: i0, template: "<div\n  class=\"base-skeleton\"\n  [class.base-skeleton-text]=\"variant === 'text'\"\n  [class.base-skeleton-circle]=\"variant === 'circle'\"\n  [class.base-skeleton-rectangle]=\"variant === 'rectangle'\"\n  [class.base-skeleton-shimmer]=\"animation === 'shimmer'\"\n  [class.base-skeleton-pulse]=\"animation === 'pulse'\"\n  [class.base-skeleton-static]=\"animation === 'none'\"\n  [style.width]=\"width || null\"\n  [style.height]=\"height || null\"\n  [style.border-radius]=\"borderRadius || null\"\n  role=\"status\"\n  [attr.aria-label]=\"ariaLabel\"\n  aria-busy=\"true\"\n  aria-hidden=\"false\">\n</div>\n", styles: [".base-skeleton{display:block;background-color:var(--base-skeleton-bg, #e2e8f0);position:relative;overflow:hidden}.base-skeleton-text{height:1rem;width:100%;border-radius:var(--base-border-radius, .25rem);margin-bottom:.5rem}.base-skeleton-circle{width:3rem;height:3rem;border-radius:50%}.base-skeleton-rectangle{width:100%;height:10rem;border-radius:var(--base-border-radius, .5rem)}.base-skeleton-shimmer:after{content:\"\";position:absolute;inset:0;transform:translate(-100%);background-image:linear-gradient(90deg,#fff0 0,#fff6 20%,#ffffffb3 60%,#fff0);animation:base-shimmer 1.5s infinite}.base-skeleton-pulse{animation:base-pulse 1.5s cubic-bezier(.4,0,.6,1) infinite}.base-skeleton-static{animation:none}@keyframes base-shimmer{to{transform:translate(100%)}}@keyframes base-pulse{0%,to{opacity:1}50%{opacity:.4}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseSkeleton, decorators: [{
            type: Component,
            args: [{ selector: 'base-skeleton', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"base-skeleton\"\n  [class.base-skeleton-text]=\"variant === 'text'\"\n  [class.base-skeleton-circle]=\"variant === 'circle'\"\n  [class.base-skeleton-rectangle]=\"variant === 'rectangle'\"\n  [class.base-skeleton-shimmer]=\"animation === 'shimmer'\"\n  [class.base-skeleton-pulse]=\"animation === 'pulse'\"\n  [class.base-skeleton-static]=\"animation === 'none'\"\n  [style.width]=\"width || null\"\n  [style.height]=\"height || null\"\n  [style.border-radius]=\"borderRadius || null\"\n  role=\"status\"\n  [attr.aria-label]=\"ariaLabel\"\n  aria-busy=\"true\"\n  aria-hidden=\"false\">\n</div>\n", styles: [".base-skeleton{display:block;background-color:var(--base-skeleton-bg, #e2e8f0);position:relative;overflow:hidden}.base-skeleton-text{height:1rem;width:100%;border-radius:var(--base-border-radius, .25rem);margin-bottom:.5rem}.base-skeleton-circle{width:3rem;height:3rem;border-radius:50%}.base-skeleton-rectangle{width:100%;height:10rem;border-radius:var(--base-border-radius, .5rem)}.base-skeleton-shimmer:after{content:\"\";position:absolute;inset:0;transform:translate(-100%);background-image:linear-gradient(90deg,#fff0 0,#fff6 20%,#ffffffb3 60%,#fff0);animation:base-shimmer 1.5s infinite}.base-skeleton-pulse{animation:base-pulse 1.5s cubic-bezier(.4,0,.6,1) infinite}.base-skeleton-static{animation:none}@keyframes base-shimmer{to{transform:translate(100%)}}@keyframes base-pulse{0%,to{opacity:1}50%{opacity:.4}}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }], animation: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });

class BaseLoader {
    size = 'medium';
    mode = 'inline';
    message = '';
    color = '';
    ariaLabel = 'Carregando';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseLoader, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseLoader, isStandalone: true, selector: "base-loader", inputs: { size: "size", mode: "mode", message: "message", color: "color", ariaLabel: "ariaLabel" }, ngImport: i0, template: "<div\n  class=\"base-loader-wrapper\"\n  [class.base-loader-overlay]=\"mode === 'overlay'\"\n  [class.base-loader-inline]=\"mode === 'inline'\"\n  role=\"status\"\n  aria-live=\"polite\"\n  [attr.aria-label]=\"message || ariaLabel\">\n  \n  <div class=\"base-loader-container\">\n    <div\n      class=\"base-spinner\"\n      [class.base-spinner-small]=\"size === 'small'\"\n      [class.base-spinner-medium]=\"size === 'medium'\"\n      [class.base-spinner-large]=\"size === 'large'\"\n      [style.border-top-color]=\"color || null\">\n    </div>\n    \n    @if (message) {\n      <span class=\"base-loader-message\">{{ message }}</span>\n    }\n  </div>\n</div>\n", styles: [".base-loader-inline{display:inline-flex;align-items:center;justify-content:center}.base-loader-overlay{position:fixed;inset:0;background-color:var(--base-overlay-bg, rgba(15, 23, 42, .4));backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;z-index:9999}.base-loader-container{display:flex;flex-direction:column;align-items:center;gap:.75rem}.base-loader-message{font-family:var(--base-font-family, inherit);font-size:.875rem;font-weight:500;color:var(--base-loader-text, #ffffff);text-align:center}.base-spinner{display:inline-block;border-radius:50%;border:3px solid var(--base-spinner-track, rgba(226, 232, 240, .4));border-top-color:var(--base-primary-color, #2563eb);animation:base-spin .8s linear infinite}.base-spinner-small{width:1.25rem;height:1.25rem;border-width:2px}.base-spinner-medium{width:2rem;height:2rem;border-width:3px}.base-spinner-large{width:3rem;height:3rem;border-width:4px}.base-loader-inline .base-loader-message{color:var(--base-text-color, #334155)}@keyframes base-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseLoader, decorators: [{
            type: Component,
            args: [{ selector: 'base-loader', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"base-loader-wrapper\"\n  [class.base-loader-overlay]=\"mode === 'overlay'\"\n  [class.base-loader-inline]=\"mode === 'inline'\"\n  role=\"status\"\n  aria-live=\"polite\"\n  [attr.aria-label]=\"message || ariaLabel\">\n  \n  <div class=\"base-loader-container\">\n    <div\n      class=\"base-spinner\"\n      [class.base-spinner-small]=\"size === 'small'\"\n      [class.base-spinner-medium]=\"size === 'medium'\"\n      [class.base-spinner-large]=\"size === 'large'\"\n      [style.border-top-color]=\"color || null\">\n    </div>\n    \n    @if (message) {\n      <span class=\"base-loader-message\">{{ message }}</span>\n    }\n  </div>\n</div>\n", styles: [".base-loader-inline{display:inline-flex;align-items:center;justify-content:center}.base-loader-overlay{position:fixed;inset:0;background-color:var(--base-overlay-bg, rgba(15, 23, 42, .4));backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;z-index:9999}.base-loader-container{display:flex;flex-direction:column;align-items:center;gap:.75rem}.base-loader-message{font-family:var(--base-font-family, inherit);font-size:.875rem;font-weight:500;color:var(--base-loader-text, #ffffff);text-align:center}.base-spinner{display:inline-block;border-radius:50%;border:3px solid var(--base-spinner-track, rgba(226, 232, 240, .4));border-top-color:var(--base-primary-color, #2563eb);animation:base-spin .8s linear infinite}.base-spinner-small{width:1.25rem;height:1.25rem;border-width:2px}.base-spinner-medium{width:2rem;height:2rem;border-width:3px}.base-spinner-large{width:3rem;height:3rem;border-width:4px}.base-loader-inline .base-loader-message{color:var(--base-text-color, #334155)}@keyframes base-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], mode: [{
                type: Input
            }], message: [{
                type: Input
            }], color: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });

class BaseHeader {
    position = 'sticky';
    brandTitle = 'Meu Sistema';
    brandLogo = '';
    navItems = [];
    navSelect = new EventEmitter();
    brandClick = new EventEmitter();
    mobileMenuOpen = false;
    toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }
    onNavClick(item) {
        this.navSelect.emit(item);
        this.mobileMenuOpen = false;
    }
    onBrandClick() {
        this.brandClick.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseHeader, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.25", type: BaseHeader, isStandalone: true, selector: "base-header", inputs: { position: "position", brandTitle: "brandTitle", brandLogo: "brandLogo", navItems: "navItems" }, outputs: { navSelect: "navSelect", brandClick: "brandClick" }, ngImport: i0, template: "<header\n  class=\"base-header\"\n  [class.base-header-static]=\"position === 'static'\"\n  [class.base-header-fixed]=\"position === 'fixed'\"\n  [class.base-header-sticky]=\"position === 'sticky'\">\n  \n  <div class=\"base-header-container\">\n    <!-- Brand / Logo -->\n    <div class=\"base-header-brand\" (click)=\"onBrandClick()\" role=\"button\" tabindex=\"0\">\n      @if (brandLogo) {\n        <img [src]=\"brandLogo\" [alt]=\"brandTitle\" class=\"base-header-logo\" />\n      }\n      <span class=\"base-header-title\">{{ brandTitle }}</span>\n    </div>\n\n    <!-- Navigation Links (Desktop) -->\n    <nav class=\"base-header-nav\" aria-label=\"Navega\u00E7\u00E3o principal\">\n      <ul class=\"base-header-list\">\n        @for (item of navItems; track item.label) {\n          <li>\n            <button\n              type=\"button\"\n              class=\"base-header-link\"\n              [class.active]=\"item.active\"\n              [attr.aria-current]=\"item.active ? 'page' : null\"\n              (click)=\"onNavClick(item)\">\n              {{ item.label }}\n            </button>\n          </li>\n        }\n      </ul>\n    </nav>\n\n    <!-- Right Actions Slot -->\n    <div class=\"base-header-actions\">\n      <ng-content select=\"[actions]\"></ng-content>\n\n      <!-- Mobile Hamburger Toggle -->\n      <button\n        type=\"button\"\n        class=\"base-header-hamburger\"\n        [attr.aria-expanded]=\"mobileMenuOpen\"\n        aria-label=\"Menu de navega\u00E7\u00E3o\"\n        (click)=\"toggleMobileMenu()\">\n        <span class=\"hamburger-bar\"></span>\n        <span class=\"hamburger-bar\"></span>\n        <span class=\"hamburger-bar\"></span>\n      </button>\n    </div>\n  </div>\n\n  <!-- Mobile Menu Drawer -->\n  @if (mobileMenuOpen) {\n    <div class=\"base-header-mobile-drawer\">\n      <nav aria-label=\"Navega\u00E7\u00E3o m\u00F3vel\">\n        <ul class=\"base-header-mobile-list\">\n          @for (item of navItems; track item.label) {\n            <li>\n              <button\n                type=\"button\"\n                class=\"base-header-mobile-link\"\n                [class.active]=\"item.active\"\n                (click)=\"onNavClick(item)\">\n                {{ item.label }}\n              </button>\n            </li>\n          }\n        </ul>\n      </nav>\n      <div class=\"base-header-mobile-actions\">\n        <ng-content select=\"[mobile-actions]\"></ng-content>\n      </div>\n    </div>\n  }\n</header>\n", styles: [".base-header{width:100%;background-color:var(--base-header-bg, #ffffff);color:var(--base-header-text, #0f172a);border-bottom:1px solid var(--base-border-color, #e2e8f0);box-shadow:var(--base-header-shadow, 0 1px 3px 0 rgba(0, 0, 0, .05));z-index:1000;font-family:var(--base-font-family, inherit)}.base-header-static{position:static}.base-header-fixed{position:fixed;top:0;left:0}.base-header-sticky{position:sticky;top:0}.base-header-container{max-width:1280px;margin:0 auto;padding:.75rem 1.5rem;display:flex;align-items:center;justify-content:space-between;height:4rem}.base-header-brand{display:flex;align-items:center;gap:.75rem;cursor:pointer;font-weight:700;font-size:1.125rem;color:var(--base-primary-color, #2563eb);text-decoration:none}.base-header-brand:focus-visible{outline:2px solid var(--base-focus-ring, #3b82f6);outline-offset:2px;border-radius:.25rem}.base-header-logo{height:2rem;width:auto;object-fit:contain}.base-header-nav{display:none}@media(min-width:768px){.base-header-nav{display:block}}.base-header-list{display:flex;align-items:center;gap:1.5rem;list-style:none;margin:0;padding:0}.base-header-link{background:none;border:none;font-size:.9375rem;font-weight:500;color:var(--base-text-muted, #475569);cursor:pointer;padding:.5rem .75rem;border-radius:var(--base-border-radius, .375rem);transition:all .2s ease}.base-header-link:hover{color:var(--base-primary-color, #2563eb);background-color:var(--base-hover-bg, #f1f5f9)}.base-header-link.active{color:var(--base-primary-color, #2563eb);background-color:var(--base-primary-light, #eff6ff);font-weight:600}.base-header-link:focus-visible{outline:2px solid var(--base-focus-ring, #3b82f6);outline-offset:2px}.base-header-actions{display:flex;align-items:center;gap:1rem}.base-header-hamburger{display:flex;flex-direction:column;justify-content:space-between;width:1.75rem;height:1.25rem;background:none;border:none;cursor:pointer;padding:0}@media(min-width:768px){.base-header-hamburger{display:none}}.base-header-hamburger .hamburger-bar{width:100%;height:2px;background-color:var(--base-text-color, #0f172a);border-radius:2px;transition:all .3s ease}.base-header-hamburger:focus-visible{outline:2px solid var(--base-focus-ring, #3b82f6);outline-offset:2px}.base-header-mobile-drawer{display:block;background-color:var(--base-header-bg, #ffffff);border-bottom:1px solid var(--base-border-color, #e2e8f0);padding:1rem 1.5rem;box-shadow:0 4px 6px -1px #0000001a}@media(min-width:768px){.base-header-mobile-drawer{display:none}}.base-header-mobile-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.5rem}.base-header-mobile-link{display:block;width:100%;text-align:left;background:none;border:none;font-size:1rem;font-weight:500;color:var(--base-text-muted, #475569);padding:.75rem 1rem;border-radius:var(--base-border-radius, .375rem);cursor:pointer}.base-header-mobile-link:hover,.base-header-mobile-link.active{color:var(--base-primary-color, #2563eb);background-color:var(--base-primary-light, #eff6ff);font-weight:600}.base-header-mobile-actions{margin-top:1rem;padding-top:1rem;border-top:1px solid var(--base-border-color, #e2e8f0)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: BaseHeader, decorators: [{
            type: Component,
            args: [{ selector: 'base-header', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<header\n  class=\"base-header\"\n  [class.base-header-static]=\"position === 'static'\"\n  [class.base-header-fixed]=\"position === 'fixed'\"\n  [class.base-header-sticky]=\"position === 'sticky'\">\n  \n  <div class=\"base-header-container\">\n    <!-- Brand / Logo -->\n    <div class=\"base-header-brand\" (click)=\"onBrandClick()\" role=\"button\" tabindex=\"0\">\n      @if (brandLogo) {\n        <img [src]=\"brandLogo\" [alt]=\"brandTitle\" class=\"base-header-logo\" />\n      }\n      <span class=\"base-header-title\">{{ brandTitle }}</span>\n    </div>\n\n    <!-- Navigation Links (Desktop) -->\n    <nav class=\"base-header-nav\" aria-label=\"Navega\u00E7\u00E3o principal\">\n      <ul class=\"base-header-list\">\n        @for (item of navItems; track item.label) {\n          <li>\n            <button\n              type=\"button\"\n              class=\"base-header-link\"\n              [class.active]=\"item.active\"\n              [attr.aria-current]=\"item.active ? 'page' : null\"\n              (click)=\"onNavClick(item)\">\n              {{ item.label }}\n            </button>\n          </li>\n        }\n      </ul>\n    </nav>\n\n    <!-- Right Actions Slot -->\n    <div class=\"base-header-actions\">\n      <ng-content select=\"[actions]\"></ng-content>\n\n      <!-- Mobile Hamburger Toggle -->\n      <button\n        type=\"button\"\n        class=\"base-header-hamburger\"\n        [attr.aria-expanded]=\"mobileMenuOpen\"\n        aria-label=\"Menu de navega\u00E7\u00E3o\"\n        (click)=\"toggleMobileMenu()\">\n        <span class=\"hamburger-bar\"></span>\n        <span class=\"hamburger-bar\"></span>\n        <span class=\"hamburger-bar\"></span>\n      </button>\n    </div>\n  </div>\n\n  <!-- Mobile Menu Drawer -->\n  @if (mobileMenuOpen) {\n    <div class=\"base-header-mobile-drawer\">\n      <nav aria-label=\"Navega\u00E7\u00E3o m\u00F3vel\">\n        <ul class=\"base-header-mobile-list\">\n          @for (item of navItems; track item.label) {\n            <li>\n              <button\n                type=\"button\"\n                class=\"base-header-mobile-link\"\n                [class.active]=\"item.active\"\n                (click)=\"onNavClick(item)\">\n                {{ item.label }}\n              </button>\n            </li>\n          }\n        </ul>\n      </nav>\n      <div class=\"base-header-mobile-actions\">\n        <ng-content select=\"[mobile-actions]\"></ng-content>\n      </div>\n    </div>\n  }\n</header>\n", styles: [".base-header{width:100%;background-color:var(--base-header-bg, #ffffff);color:var(--base-header-text, #0f172a);border-bottom:1px solid var(--base-border-color, #e2e8f0);box-shadow:var(--base-header-shadow, 0 1px 3px 0 rgba(0, 0, 0, .05));z-index:1000;font-family:var(--base-font-family, inherit)}.base-header-static{position:static}.base-header-fixed{position:fixed;top:0;left:0}.base-header-sticky{position:sticky;top:0}.base-header-container{max-width:1280px;margin:0 auto;padding:.75rem 1.5rem;display:flex;align-items:center;justify-content:space-between;height:4rem}.base-header-brand{display:flex;align-items:center;gap:.75rem;cursor:pointer;font-weight:700;font-size:1.125rem;color:var(--base-primary-color, #2563eb);text-decoration:none}.base-header-brand:focus-visible{outline:2px solid var(--base-focus-ring, #3b82f6);outline-offset:2px;border-radius:.25rem}.base-header-logo{height:2rem;width:auto;object-fit:contain}.base-header-nav{display:none}@media(min-width:768px){.base-header-nav{display:block}}.base-header-list{display:flex;align-items:center;gap:1.5rem;list-style:none;margin:0;padding:0}.base-header-link{background:none;border:none;font-size:.9375rem;font-weight:500;color:var(--base-text-muted, #475569);cursor:pointer;padding:.5rem .75rem;border-radius:var(--base-border-radius, .375rem);transition:all .2s ease}.base-header-link:hover{color:var(--base-primary-color, #2563eb);background-color:var(--base-hover-bg, #f1f5f9)}.base-header-link.active{color:var(--base-primary-color, #2563eb);background-color:var(--base-primary-light, #eff6ff);font-weight:600}.base-header-link:focus-visible{outline:2px solid var(--base-focus-ring, #3b82f6);outline-offset:2px}.base-header-actions{display:flex;align-items:center;gap:1rem}.base-header-hamburger{display:flex;flex-direction:column;justify-content:space-between;width:1.75rem;height:1.25rem;background:none;border:none;cursor:pointer;padding:0}@media(min-width:768px){.base-header-hamburger{display:none}}.base-header-hamburger .hamburger-bar{width:100%;height:2px;background-color:var(--base-text-color, #0f172a);border-radius:2px;transition:all .3s ease}.base-header-hamburger:focus-visible{outline:2px solid var(--base-focus-ring, #3b82f6);outline-offset:2px}.base-header-mobile-drawer{display:block;background-color:var(--base-header-bg, #ffffff);border-bottom:1px solid var(--base-border-color, #e2e8f0);padding:1rem 1.5rem;box-shadow:0 4px 6px -1px #0000001a}@media(min-width:768px){.base-header-mobile-drawer{display:none}}.base-header-mobile-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.5rem}.base-header-mobile-link{display:block;width:100%;text-align:left;background:none;border:none;font-size:1rem;font-weight:500;color:var(--base-text-muted, #475569);padding:.75rem 1rem;border-radius:var(--base-border-radius, .375rem);cursor:pointer}.base-header-mobile-link:hover,.base-header-mobile-link.active{color:var(--base-primary-color, #2563eb);background-color:var(--base-primary-light, #eff6ff);font-weight:600}.base-header-mobile-actions{margin-top:1rem;padding-top:1rem;border-top:1px solid var(--base-border-color, #e2e8f0)}\n"] }]
        }], propDecorators: { position: [{
                type: Input
            }], brandTitle: [{
                type: Input
            }], brandLogo: [{
                type: Input
            }], navItems: [{
                type: Input
            }], navSelect: [{
                type: Output
            }], brandClick: [{
                type: Output
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { BaseButton, BaseCard, BaseCarousel, BaseCheckbox, BaseChip, BaseDropdown, BaseGrid, BaseHeader, BaseIcon, BaseInput, BaseLink, BaseLoader, BaseModal, BasePagination, BaseSelect, BaseSkeleton, BaseTab, BaseTable, BaseTitle, BaseToast, BaseToggle, BaseTooltip };
//# sourceMappingURL=workspace-component-library-angular.mjs.map
