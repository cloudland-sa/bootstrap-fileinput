/*!
 * FileInput <_LANG_> Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['_LANG_'] = {
        fileSingle: 'ملف',
        filePlural: 'ملفات',
        browseLabel: 'استعراض &hellip;',
        removeLabel: 'حذف',
        removeTitle: 'مسح الملفات المحددة',
        cancelLabel: 'الغاء',
        cancelTitle: 'الغاء عمليات التحميل الحالية',
        uploadLabel: 'تحميل',
        uploadTitle: 'تحميل الملفات المحددة',
        msgZoomTitle: 'عرض التفاصيل',
        msgZoomModalHeading: 'معاينة مفصلة',
        msgSizeTooLarge: 'الملف "{name}" (<b>{size} كبا</b>) يتخطى الحد الأعلى المحدد لتحميل <b>{maxSize} كبا</b>.',
        msgFilesTooLess: 'يجب عليك ان تختار كحد أدنى <b>{n}</b> {files} لتحميلها.',
        msgFilesTooMany: 'عدد الملفات الحددة للتحميل <b>({n})</b> يتخطى الحد الأعلى المسموح به <b>{m}</b>.',
        msgFileNotFound: 'الملف "{name}" غير موجود!',
        msgFileSecured: 'قيود الأمان تمنع قراءة الملف "{name}".',
        msgFileNotReadable: 'الملف "{name}" غير قابل للقراءة.',
        msgFilePreviewAborted: 'تم الغاء معاينة الملف  "{name}".',
        msgFilePreviewError: 'حدث خطأ بينما تتم قراءة الملف "{name}".',
        msgInvalidFileType: 'نوع الملف غير صحيح "{name}". فقط الأنواع "{types}" مدعومة',
        msgInvalidFileExtension: 'امتداد الملف غير صحيح "{name}". فقط الامتدادات "{extensions}" مدعومة.',
        msgUploadAborted: 'تم الغاء تحميل الملف',
        msgValidationError: 'خطأ اثناء تحميل الملف',
        msgLoading: 'جار تحميل الملف {index} من {files} &hellip;',
        msgProgress: 'جاري تحميل الملف {index} من {files} - {name} - {percent}% مكتملة.',
        msgSelected: '{n} {files} محددة',
        msgFoldersNotAllowed: 'اسحب وافلت الملفات فقط! تم تخطي {n} مجلد مفلت.',
        msgImageWidthSmall: 'عرض ملف الصورة "{name}" يجب أن يكون على الأقل {size} بيكسل.',
        msgImageHeightSmall: 'ارتفاع ملف الصورة "{name}" يجب ان يكون على الأقل {size} بيكسل.',
        msgImageWidthLarge: 'عرض ملف الصورة "{name}" لايمكنه تخطي {size} بيكسل.',
        msgImageHeightLarge: 'ارتفاع ملف الصورة "{name}" لايمكنه تخطي {size} بيكسل.',
        dropZoneTitle: 'اسحب وافلت الملفات هنا &hellip;',
        fileActionSettings: {
            removeTitle: 'حذف الملف',
            uploadTitle: 'تحميل الملف',
            indicatorNewTitle: 'لم يُحمل بعد',
            indicatorSuccessTitle: 'مُحمل',
            indicatorErrorTitle: 'خطأ تحميل',
            indicatorLoadingTitle: 'تحميل ...'
        }
    };
})(window.jQuery);
